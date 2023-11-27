import React, {useEffect, useState} from "react";
import {Table, Tag, Image, Button} from "antd";
import FilterGroupGlobal from "@app/components/FilterGroupGlobal";
import "./index.scss";
import {onValue, ref} from "@firebase/database";
import {database, url} from "@app/config/firebase";

export function ListBooking(): JSX.Element {
  const [listClassInit, setListClassInit] = useState();
  // action reject - post
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database, url);

        onValue(dataRef, (snapshot) => {
          const dataFromFirebase = snapshot.val();

          // convert data
          const newArray = Object.keys(dataFromFirebase).map((idClass) => {
            return {
              id: Object.keys(dataFromFirebase[idClass])[0],
              Name: dataFromFirebase[idClass].Name,
              Date: dataFromFirebase[idClass].Date,
              QR: "",
            };
          });

          console.log("newArray", newArray);
          setListClassInit(newArray);
        });
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (valueSearch: string): void => {
    console.log("Ssss");
  };

  const handleAddQr = (value: string): void => {};

  const listSearchText = [
    {
      placeHolder: "Tìm kiếm...",
      onSearch: handleSearch,
      maxLength: 255,
      tooltip: "Từ khóa: Tiêu đề",
    },
  ];

  const columns: any = [
    {
      title: "Mã lớp",
      dataIndex: "id",
      key: "id",
      width: 150,
      align: "center",
    },
    {
      title: "Tên lớp",
      key: "Name",
      dataIndex: "Name",
      align: "center",
      // render: (_, dataIndex) => <div>Phân loại: {dataIndex.description}</div>,
      width: 140,
    },
    {
      title: "Ngày học",
      dataIndex: "Date",
      key: "Date",
      align: "center",
      width: 140,
    },
    {
      title: "Mã QR",
      dataIndex: "QR",
      key: "QR",
      align: "center",
      width: 140,
      render: (_, dataIndex: any) => (
        <div>
          <Image preview={false} width={200} src={dataIndex.QR} />
        </div>
      ),
    },
    {
      title: "Thao tác",
      align: "center",
      fixed: "right",
      width: 170,
      render: (_, dataIndex: any) => (
        <div>
          <Button onClick={() => handleAddQr("22")} type="primary">
            Tạo mã QR
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="list-booking-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <FilterGroupGlobal listSearchText={listSearchText} />
        <Button onClick={() => handleAddQr("22")} type="primary">
          Tạo lớp mới
        </Button>
      </div>
      <Table
        style={{marginTop: 10}}
        scroll={{x: 600, y: 485}}
        columns={columns}
        dataSource={listClassInit}
        className="table-list-booking"
        pagination={false}
      />
    </div>
  );
}
