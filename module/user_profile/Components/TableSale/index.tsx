import React, {useState} from "react";
import "./index.scss";
import {ColumnsType} from "antd/es/table";
import {Modal, notification, Table} from "antd";
import {CheckCircleFilled} from "@ant-design/icons";
import ItemBook from "@app/components/ItemBook/ItemBook";
import {useMutation} from "react-query";
import ApiBook from "@app/api/ApiBook";
import {InputGlobal} from "@app/components/InputGlobal";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import {Formik} from "formik";

export interface DataType {
  orderId: number;
  key: string;
  name: string;
  image: string;
  address: string;
  description: string;
  transport: string;
  phoneNumber: string;
  total: string;
}

interface ITableSale {
  keyTab: any;
  dataOrder?: any;
  status?: string;
  getDataSellOrder?: any;
}

export function TableSale(props: ITableSale): JSX.Element {
  const {keyTab, dataOrder, status, getDataSellOrder} = props;
  const convertStatusOrder = useMutation(ApiBook.convertOrderStatus);
  const cancelOrder = useMutation(ApiBook.cancelOrder);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idOrder, setIdOrder] = useState<any>();

  const handleOk = (value: any) => {
    setIsModalOpen(false);
    cancelOrder.mutate(
      {
        orderId: idOrder,
        cancelReason: value.cancelReason,
      },
      {
        onSuccess: (res: any) => {
          if (res) {
            notification.success({
              message: "Huỷ trạng thái thành công!",
            });
            getDataSellOrder.refetch();
          } else {
            notification.error({
              message: "Huỷ trạng thái thất bại, vui lòng thử lại!",
            });
          }
        },
      }
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAcceptStatus = (value: any): void => {
    convertStatusOrder.mutate(
      {
        orderId: value,
      },
      {
        onSuccess: (res: any) => {
          if (res) {
            notification.success({
              message: "Cập nhật trạng thái thành công!",
            });
            getDataSellOrder.refetch();
          } else {
            notification.error({
              message: "Cập nhật trạng thái thất bại, vui lòng thử lại!",
            });
          }
        },
      }
    );
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return <ItemBook data={record} />;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: status === "cancel" ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* {keyTab !== "HOÀN THÀNH" && ( */}
          {/*  <div onClick={() => showModal(record.orderId)}> */}
          {/*    <CloseCircleFilled style={{fontSize: 22, color: "red"}} /> */}
          {/*  </div> */}
          {/* )} */}
          {keyTab !== "HOÀN THÀNH" && keyTab !== "ĐÃ NHẬN" && (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              onClick={() => handleAcceptStatus(record.orderId)}
              style={{marginLeft: 8}}
            >
              <CheckCircleFilled style={{fontSize: 22, color: "blue"}} />
            </div>
          )}
          {/* {keyTab !== "ĐÃ NHẬN" && ( */}
          {/*  <div */}
          {/*    onClick={() => handleAcceptStatus(record.orderId)} */}
          {/*    style={{marginLeft: 8}} */}
          {/*  > */}
          {/*    <CheckCircleFilled style={{fontSize: 22, color: "blue"}} /> */}
          {/*  </div> */}
          {/* )} */}
        </div>
      ),
      align: "center",
      fixed: "right",
      width: 100,
    },
  ];
  return (
    <div className="item-trade-buy-container">
      <Table
        style={{marginTop: 10}}
        // scroll={{x: 1300}}
        columns={columns}
        dataSource={dataOrder}
      />
      <Modal
        title="Lí do từ chối"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Formik
          initialValues={{cancelReason: ""}}
          onSubmit={handleOk}
          validateOnChange
          validateOnBlur
          // validationSchema={LoginValidation}
        >
          {({handleSubmit}): JSX.Element => {
            return (
              <div className="page-login-container">
                <div
                  className="login-container"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="login-form-item" style={{marginBottom: 20}}>
                    <InputGlobal
                      name="cancelReason"
                      placeholder="Email"
                      // prefix={<UserOutlined />}
                      className="input_login"
                      onPressEnter={(): void => handleSubmit()}
                    />
                    <ErrorMessageGlobal name="cancelReason" />
                  </div>
                  <ButtonGlobal
                    onClick={handleSubmit}
                    className="btn-login"
                    title="Xác nhận"
                    type="primary-filled"
                    // loading={login.isLoading}
                  />
                </div>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
}
