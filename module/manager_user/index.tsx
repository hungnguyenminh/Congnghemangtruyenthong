import React, {useEffect, useState} from "react";
import {ColumnsType} from "antd/es/table";
import {Modal, Table} from "antd";

import {InputGlobal} from "@app/components/InputGlobal";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {Formik} from "formik";
import FilterGroupGlobal, {
  ListSelectOptionType,
} from "@app/components/FilterGroupGlobal";
import {database, url} from "@app/config/firebase";
import {onValue, ref} from "@firebase/database";

interface DataType {
  key?: string;
  email: number;
  name: string;
  id: string;
}

export interface IUserOnlyClass {
  email: string;
  id: number;
  name: string;
}

export interface IItemAllData {
  idClass: string;
  listUser: IUserOnlyClass[];
}

export interface IListAllClass {
  value: string | number;
  label: string;
}
export function ManagerUser(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataUserInit, setDataUserInit] = useState<IItemAllData[]>([]);
  const [dataOnlyClass, setDataOnlyClass] = useState<IItemAllData[]>([]);
  const [dataAllClass, setDataAllClass] = useState<IListAllClass[]>([]);

  console.log("dataOnlyClass", dataOnlyClass);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database, url);

        onValue(dataRef, (snapshot) => {
          const dataFromFirebase = snapshot.val();
          setDataUserInit(dataFromFirebase);

          const arrayAllClass: IListAllClass[] = [];
          // convert data
          const newArray = Object.keys(dataFromFirebase).map((idClass) => {
            const newItemClass: IListAllClass = {
              value: idClass,
              label: `Lớp ${idClass}`,
            };
            arrayAllClass.push(newItemClass);

            const listUser = Object.values(dataFromFirebase[idClass]).map(
              (user: any) => {
                if (user && user?.email?.length > 0) {
                  return {
                    email: user.email,
                    id: user.id,
                    name: user.name,
                  };
                }
              }
            );

            return {
              idClass,
              listUser,
            };
          });

          setDataAllClass(arrayAllClass);
          setDataUserInit(newArray);

          setDataOnlyClass(newArray[0]);
        });
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };
    fetchData();
  }, []);

  // console.log("dataUserInit", dataUserInit);

  const handleFilterClass = (value: string): void => {
    console.log("value", value);
    const itemFilter = dataUserInit.filter((item) => item.idClass === value);
    setDataOnlyClass(itemFilter[0]);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data: any) => {
    console.log("data", data);
  };

  const listSelectOption: ListSelectOptionType[] = [
    {
      title: "Lọc",
      handleChange: handleFilterClass,
      placeholder: "Lọc theo lớp",
      defaultValue: "all",
      optionSelect: dataAllClass,
    },
  ];
  const columns: ColumnsType<DataType> = [
    // {
    //   title: "STT",
    //   dataIndex: "stt",
    //   key: "stt",
    //   align: "center",
    //   width: 80,
    //   render: (_, dataIndex: any) => (
    //     <div>{dataOnlyClass.listUser.indexOf(dataIndex) + 1}</div>
    //   ),
    // },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: 150,
      align: "center",
    },

    {
      title: "name",
      key: "name",
      dataIndex: "name",
      align: "center",
      width: 120,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
      width: 120,
    },
    {
      title: "MSV",
      dataIndex: "email",
      key: "email",
      align: "center",
      width: 120,
    },
    {
      title: "Lớp",
      dataIndex: "email",
      key: "email",
      align: "center",
      width: 120,
    },
  ];
  const listInputUser = [
    {
      title: "Tên người dùng",
      placeHolder: "Nhập tên người dùng",
      type: "input",
    },
    {
      title: "Ảnh đại diện",
      placeHolder: "Nhập tên người dùng",
      type: "uploadFile",
    },
    {
      title: "Email",
      placeHolder: "Nhập Email",
      type: "input",
    },
    {
      title: "Sách còn lại",
      placeHolder: "Nhập số sách còn lại",
      type: "input",
    },
    {
      title: "Số đơn giao dịch",
      placeHolder: "Nhập số đơn",
      type: "input",
    },
  ];

  return (
    <div className="manager-user-container">
      <FilterGroupGlobal listSelectOption={listSelectOption} />
      <Table
        style={{marginTop: 10}}
        scroll={{x: 800, y: 400}}
        columns={columns}
        dataSource={dataOnlyClass?.listUser}
        pagination={false}
      />
      <Modal
        title="Sửa thông tin người dùng"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnBlur
          // validationSchema={LoginValidation}
        >
          {({handleSubmit}): JSX.Element => {
            return (
              <div>
                {listInputUser.map((item, index) => (
                  <div key={index}>
                    {item.type === "input" && (
                      <div
                        style={{
                          marginBottom: 12,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{width: "20%"}}>{`${item.title}:  `}</span>
                        <InputGlobal
                          name="username"
                          placeholder={item.placeHolder}
                          style={{width: "80%"}}
                          onPressEnter={(): void => handleSubmit()}
                        />
                        <ErrorMessageGlobal name="username" />
                      </div>
                    )}
                    {item.type === "uploadFile" && (
                      <div
                        style={{
                          marginBottom: 12,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{width: "20%"}}>{`${item.title}:  `}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
}
