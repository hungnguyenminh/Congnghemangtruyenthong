import React, {useEffect, useState} from "react";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  notification,
  QRCode,
  Select,
  Table,
  Tooltip,
} from "antd";
import FilterGroupGlobal from "@app/components/FilterGroupGlobal";
import "./index.scss";
import {onValue, ref, set} from "@firebase/database";
import {database, url} from "@app/config/firebase";

export function ListBooking(): JSX.Element {
  const [listClassInit, setListClassInit] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formClass, setFormClass] = useState({
    id: "",
    name: "",
    date: "",
    shift: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const dataRef = ref(database, url + "/" + formClass.id);
    set(dataRef, formClass).then(() => {
      notification.success({
        message: "Tạo lớp thành công!",
      });
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
              id: idClass,
              Name: dataFromFirebase[idClass].name,
              Date: dataFromFirebase[idClass].date,
              shift: dataFromFirebase[idClass].shift,
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

  const handleCopyClick = async (id: number) => {
    try {
      await navigator.clipboard.writeText(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`
      );
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };

  const handleSearch = (valueSearch: string): void => {
    console.log("Ssss");
  };

  console.log("listClassInit", listClassInit);

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
      title: "Kíp học",
      dataIndex: "shift",
      key: "shift",
      align: "center",
      width: 140,
    },
    {
      title: "Mã QR",
      dataIndex: "QR",
      key: "QR",
      align: "center",
      width: 160,
      render: (_, dataIndex: any) => {
        return (
          <Tooltip title="Bấm vào để lấy link QR">
            <div
              onClick={() => handleCopyClick(dataIndex.id)}
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <QRCode value={dataIndex.id} />
            </div>
          </Tooltip>
        );
      },
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
        <Button onClick={() => showModal()} type="primary">
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
      <Modal
        title="Thêm lớp"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div style={{marginBottom: 2}}>Mã lớp:</div>
          <Input
            placeholder="Mã lớp"
            onChange={(e) => setFormClass({...formClass, id: e.target.value})}
          />
          <div style={{marginTop: 10, marginBottom: 2}}>Tên lớp:</div>
          <Input
            placeholder="Tên lớp"
            onChange={(e) => setFormClass({...formClass, name: e.target.value})}
          />
          <div style={{marginTop: 10, marginBottom: 2}}>Ngày học:</div>
          <DatePicker
            style={{width: "100%"}}
            onChange={(date, dateString) =>
              setFormClass({...formClass, date: dateString})
            }
          />
          <div style={{marginTop: 10, marginBottom: 2}}>Kíp học:</div>
          <Select
            defaultValue=""
            placeholder="Chọn kíp học"
            style={{width: "100%"}}
            onChange={(string) => setFormClass({...formClass, shift: string})}
            options={[
              {value: "Kíp 1", label: "Kíp 1"},
              {value: "Kíp 2", label: "Kíp 2"},
              {value: "Kíp 3", label: "Kíp 3"},
              {value: "Kíp 4", label: "Kíp 4"},
              {value: "Kíp 5", label: "Kíp 5"},
              {value: "Kíp 6", label: "Kíp 6"},
            ]}
          />
        </div>
      </Modal>
    </div>
  );
}
