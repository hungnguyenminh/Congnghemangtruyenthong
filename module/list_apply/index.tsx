import React, {useEffect, useState} from "react";
import {
  Button,
  Image,
  notification,
  Table,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
} from "antd";
import {CheckCircleOutlined} from "@ant-design/icons";
import FilterGroupGlobal from "@app/components/FilterGroupGlobal";
import {
  acceptApply,
  getAllApply,
  IGetAllApplyRes,
  IItemApplyRes,
} from "@app/api/ApiProduct";
import {useMutation, useQuery} from "react-query";
import {LoadingGlobal} from "@app/components/Loading";
import {useRouter} from "next/router";

export function ListApply(): JSX.Element {
  const router = useRouter();
  const [dataApply, setDataApply] = useState<IItemApplyRes[]>([]);

  const [keyTabSelected, setKeyTabSelected] = useState<string>("");

  const getDataListApply = (): Promise<IGetAllApplyRes> =>
    // IGetAllBookingRes
    getAllApply({
      page: 1,
      size: 10,
      statuses: keyTabSelected,
    });

  const dataListApply = useQuery(["GET_LIST_APPLY"], getDataListApply, {
    onSuccess: (res) => {
      console.log("res", res?.data?.content);
      setDataApply(res?.data?.content ?? []);
    },
  });

  const goToDetailApply = (id: number): void => {
    router.push({
      pathname: "/detail_apply",
      query: {
        id: id,
      },
    });
  };

  const handleSearch = (valueSearch: string): void => {
    console.log("Ssss");
  };

  const onChangeTab = (key: string) => {
    setKeyTabSelected(key === "all" ? "" : key);
  };

  useEffect(() => {
    dataListApply.refetch();
  }, [keyTabSelected]);

  const itemsTab: TabsProps["items"] = [
    {
      key: "all",
      label: "Tất cả",
    },
    {
      key: "WAITING_FOR_APPROVE",
      label: "Chờ duyệt",
    },
    {
      key: "WAITING_FOR_CONFIRM",
      label: "Chờ xác nhận",
    },
  ];

  const listSearchText = [
    {
      placeHolder: "Tìm kiếm...",
      onSearch: handleSearch,
      maxLength: 255,
      tooltip: "Từ khóa: Tiêu đề",
    },
  ];
  const listDatePicker = [
    {
      onChange: (startTime: number, endTime: number): void => {
        console.log("startTime", startTime);
        console.log("endTime", endTime);
      },
      tooltip: "Ngày tạo",
      title: "Ngày tạo",
    },
  ];
  const columns: any = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center",
      width: 70,
      render: (_: any, dataIndex: any) => (
        <div>{dataApply.indexOf(dataIndex) + 1}</div>
      ),
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
      align: "center",
      width: 170,
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "personalAvatar",
      key: "image",
      render: (_: any, dataIndex: any) => (
        <div>
          <Image
            style={{borderRadius: 100}}
            width={100}
            height={100}
            preview={false}
            src={dataIndex.personalAvatar}
          />
        </div>
      ),
      align: "center",
      width: 140,
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      align: "center",
      width: 220,
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
      width: 140,
    },
    {
      title: "Ngày sinh",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      align: "center",
      width: 140,
    },
    {
      title: "Tạm trú",
      dataIndex: "placeOfResidence",
      key: "placeOfResidence",
      align: "center",
      width: 200,
    },
    {
      title: "Quê quán",
      dataIndex: "homeTown",
      key: "homeTown",
      align: "center",
      width: 200,
    },

    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      fixed: "right",
      width: 170,
      render: (_: any, dataIndex: any) => (
        <div>
          {dataIndex.status === "WAITING_FOR_APPROVE" && (
            <Tag color="cyan">{dataIndex.status}</Tag>
          )}
          {dataIndex.status === "WAITING_FOR_CONFIRM" && (
            <Tag color="lime">{dataIndex.status}</Tag>
          )}
          {dataIndex.status === "DISABLED" && (
            <Tag color="red">{dataIndex.status}</Tag>
          )}
          {dataIndex.status === "ONLINE" && (
            <Tag color="green">{dataIndex.status}</Tag>
          )}
        </div>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "action",
      align: "center",
      render: (_: any, dataIndex: any) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <div>{dataIndex.helperInformationId}</div> */}
          <Button
            onClick={() => goToDetailApply(dataIndex.helperInformationId)}
            style={{fontSize: 13}}
            shape="round"
            type="primary"
          >
            Xem chi tiết
          </Button>
        </div>
      ),
      fixed: "right",
      width: 140,
    },
  ];
  return (
    <div className="list-apply-container">
      <Tabs defaultActiveKey="all" items={itemsTab} onChange={onChangeTab} />
      <FilterGroupGlobal
        listSearchText={listSearchText}
        listDatePicker={listDatePicker}
      />
      {dataListApply.isLoading ? (
        <LoadingGlobal />
      ) : (
        <Table
          style={{marginTop: 10}}
          scroll={{x: 600, y: 485}}
          columns={columns}
          dataSource={dataApply}
          pagination={false}
        />
      )}
    </div>
  );
}
