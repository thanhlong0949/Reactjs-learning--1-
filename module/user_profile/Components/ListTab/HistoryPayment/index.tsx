import {Table} from "antd";
import {useEffect, useState} from "react";
import ApiUser from "@app/api/ApiUser";
import {useSelector} from "react-redux";
import {getMoneyFormat} from "@app/utils/convert/ConvertHelper";

function HistoryPayment() {
  const user = useSelector((state: any) => state.user);
  const [dataHistory, setDataHistory] = useState<any>();

  useEffect(() => {
    ApiUser.getHistoryPayment({userId: user?.id}).then((res) => {
      setDataHistory(res);
    });
  }, []);

  const columns = [
    {
      title: "id",
      dataIndex: "amount",
      render: (_: any, __: any, index: any) => index + 1,
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      render: (record: any) => <div>{getMoneyFormat(record)} VNĐ</div>,
    },
    {
      title: "Mã gião dịch",
      dataIndex: "orderCode",
    },
    {
      title: "Ngày giao dịch",
      dataIndex: "createAt",
    },
    {
      title: "Kiểu giao dịch",
      dataIndex: "type",
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentMethod",
    },
  ];
  return (
    <>
      <h1>Lịch sử giao dịch</h1>
      <Table dataSource={dataHistory} columns={columns} pagination={false} />
    </>
  );
}
export default HistoryPayment;
