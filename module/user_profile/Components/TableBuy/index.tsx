import React, {Dispatch, SetStateAction, useState} from "react";
import "./index.scss";
import {ColumnsType} from "antd/es/table";
import {
  DatePicker,
  DatePickerProps,
  Input,
  Modal,
  notification,
  Table,
} from "antd";
import ItemBook from "@app/components/ItemBook/ItemBook";
import {CloseCircleFilled, PlusCircleOutlined} from "@ant-design/icons";
import ApiBook from "@app/api/ApiBook";
import {notificationError} from "@app/utils/notification";
import {useMutation} from "react-query";

interface ITableBuy {
  keyPage?: string;
  dataOrder?: any;
  status?: string;
  setCheck?: Dispatch<SetStateAction<string>>;
  getDataBoughtOrder: any;
}
interface DataType {
  key: string;
  name: string;
  image: string;
  address: string;
  description: string;
  transport: string;
  phoneNumber: string;
  total: string;
}

export function TableBuy(props: ITableBuy): JSX.Element {
  const {keyPage, dataOrder, status, setCheck, getDataBoughtOrder} = props;
  const [open, setOpen] = useState(false);
  const [valueInput, setValueInput] = useState<string>("");
  const [orderId, setOrderId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateString, setDateString] = useState();
  const updateResentDateMutate = useMutation(ApiBook.updateResentDate);
  const onChange: DatePickerProps["onChange"] = (date, dateString: any) => {
    setDateString(dateString);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    updateResentDateMutate.mutate(
      {
        orderId: orderId,
        resentDate: dateString,
      },
      {
        onSuccess: (res: any) => {
          if (res) {
            notification.success({
              message: "Huỷ trạng thái thành công!",
            });
            getDataBoughtOrder.refetch();
          } else {
            notification.error({
              message: "Huỷ trạng thái thất bại, vui lòng thử lại!",
            });
          }
        },
      }
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {TextArea} = Input;

  const putCancelOrder = (): Promise<any> =>
    ApiBook.cancelOrderByOrderId(orderId, valueInput);

  const handleCancelOrder = () => {
    if (orderId !== 0) {
      if (valueInput !== "") {
        putCancelOrder().then(() => {
          if (setCheck) {
            setCheck("load");
          }
          setOpen(false);
        });
      } else {
        notificationError("Vui lòng nhập lí do của bạn");
      }
    }
  };

  const hideModal = () => {
    setOpen(false);
  };

  const renderModalCancel = () => {
    return (
      <>
        <h3>Vui Lòng Nhập Lí Do: </h3>
        <TextArea rows={4} onChange={(e) => setValueInput(e.target.value)} />
      </>
    );
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <ItemBook keyPage={keyPage} data={record} />,
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, record: any) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{display: status !== "processing" ? "none" : ""}}>
            <CloseCircleFilled
              style={{fontSize: 22, color: "red"}}
              onClick={() => {
                setOpen(true);
                setOrderId(record?.orderId);
              }}
            />
          </div>
          {keyPage === "HOÀN THÀNH" && record.form === "Trao Đổi" && (
            <div>
              <PlusCircleOutlined
                style={{fontSize: 22, color: "blue"}}
                onClick={() => {
                  // setOpen(true);
                  setOrderId(record?.orderId);
                  showModal();
                }}
              />
            </div>
          )}
        </div>
      ),
      align: "center",
      fixed: "right",
      width: 100,
    },
  ];
  return (
    <div className="item-trade-buy-container">
      <Modal
        title="Thay đổi địa chỉ"
        open={open}
        onOk={handleCancelOrder}
        onCancel={hideModal}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        {renderModalCancel()}
      </Modal>
      <Modal
        title="Chọn ngày gửi lại"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DatePicker onChange={onChange} />
      </Modal>
      <Table style={{marginTop: 10}} columns={columns} dataSource={dataOrder} />
    </div>
  );
}
