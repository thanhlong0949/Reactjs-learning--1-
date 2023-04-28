import React, {Key, useEffect, useState} from "react";
import "./index.scss";
import {ColumnsType} from "antd/es/table";
import {Image, notification, Switch, Table} from "antd";
import {EditOutlined, HourglassOutlined} from "@ant-design/icons";
import FilterGroupGlobal from "@app/components/FilterGroupGlobal";
import {ModalEdit} from "@app/module/user_profile/Components/ListTab/HistoryPost/Components/ModalEdit";
import ApiBook from "@app/api/ApiBook";
import {useMutation, useQuery} from "react-query";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

interface DataType {
  orderId: number;
  key: string;
  imageUrl: string;
  title: string;
  form: string;
  name: string;
  price: any;
  status: string;
  id: number;
  image: string;
  address: string;
  description: string;
  transport: string;
  phoneNumber: string;
  total: string;
}

export function HistoryPost(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state: any) => state.user);
  const router = useRouter();
  const [idItem, setIdItem] = useState<Key>();

  const updatePostStatus = useMutation(ApiBook.updatePostStatus);
  const getDataAllMyPostByUseId = (): Promise<any> =>
    ApiBook.getAllMyPostByUseId(user.email);

  const DataAllMyPostByUseId = useQuery(
    "GET_MY_ALL_POST_BY_USERID",
    getDataAllMyPostByUseId
  );

  useEffect(() => {
    DataAllMyPostByUseId.refetch();
  }, [isModalOpen]);

  const handleSearch = (valueSearch: string): void => {
    console.log(valueSearch);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const onChange = (id: number) => {
    updatePostStatus.mutate(
      {
        id: id,
      },
      {
        onSuccess: (res: any) => {
          notification.success({
            message: "Cập nhật trạng thái bài đăng thành công!",
          });
          DataAllMyPostByUseId.refetch();
        },
      }
    );
  };

  const listSearchText = [
    {
      placeHolder: "Tìm kiếm...",
      onSearch: handleSearch,
      maxLength: 255,
      tooltip: "Từ khóa: Tiêu đề",
    },
  ];
  const handleClick = (data: any) => {
    router.push({
      pathname: "/detail_book",
      query: {key: data.form, postId: data.id, bookId: data.bookList[0].bookId},
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div className="items" onClick={() => handleClick(record)}>
            <div className="items-book">
              <div className="image">
                <Image
                  width={50}
                  height={80}
                  style={{objectFit: "cover"}}
                  src={record?.imageUrl}
                  preview={false}
                />
              </div>
              <div className="infor-book">
                <div className="infor-left">
                  <div className="name">{record?.title}</div>
                  <div className="des">{record?.description}</div>
                  <div className="des">{record?.form}</div>
                </div>
                <div className="infor-right">
                  <div className="price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(record?.price)}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Switch
              checked={record?.status === "active"}
              onClick={() => onChange(record?.id)}
            />
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => {
              showModal();
              setIdItem(record?.id);
            }}
            style={{marginLeft: 8}}
          >
            <EditOutlined style={{fontSize: 22, color: "blue"}} />
          </div>
          {record.status === "expired" ? (
            <div style={{marginLeft: 8}}>
              <HourglassOutlined style={{fontSize: 22, color: "red"}} />
            </div>
          ) : null}
        </div>
      ),
      fixed: "right",
      width: 120,
    },
  ];

  return (
    <div className="item-trade-buy-container">
      <FilterGroupGlobal listSearchText={listSearchText} />
      <Table
        style={{marginTop: 10}}
        columns={columns}
        dataSource={DataAllMyPostByUseId?.data ?? []}
      />
      <ModalEdit
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={DataAllMyPostByUseId?.data}
        idItem={idItem}
      />
    </div>
  );
}
