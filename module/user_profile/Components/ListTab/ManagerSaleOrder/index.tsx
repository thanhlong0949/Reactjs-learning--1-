import React, {useEffect, useState} from "react";
import "./index.scss";
import {Tabs, TabsProps} from "antd";
import {TableSale} from "@app/module/user_profile/Components/TableSale";
import ApiBook from "@app/api/ApiBook";
import {useMutation, useQuery} from "react-query";
import {useSelector} from "react-redux";
import ApiUser from "@app/api/ApiUser";

export function ManagerSaleOrder(): JSX.Element {
  const user = useSelector((state: any) => state.user);
  const [keyTabSubmit, setKeyTabSubmit] = useState<string>();
  const [status, setStatus] = useState<string>("WaitingForConfirmation");
  const [dataOrder, setDataOrder] = useState();

  const onChange = (key: string) => {
    setKeyTabSubmit(key);
    switch (key) {
      case "1":
        setStatus("WaitingForConfirmation");
        break;
      case "2":
        setStatus("processing");
        break;
      case "3":
        setStatus("delivery");
        break;
      case "4":
        setStatus("complete");
        break;
      case "5":
        setStatus("cancel");
        break;
      case "6":
        setStatus("resent");
        break;
      case "7":
        setStatus("received");
        break;
    }
  };
  const getDataListSellOrder = (): Promise<any> =>
    ApiBook.getAllSellOrder(user.id, status);
  const getDataSellOrder = useQuery(
    "GET_DATA_LIST_SELL_ORDER",
    getDataListSellOrder,
    {
      onSuccess: (res) => {
        setDataOrder(res);
      },
    }
  );

  useEffect(() => {
    getDataSellOrder.refetch();
  }, [status]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `CHỜ XÁC NHẬN`,
      children: (
        <TableSale
          keyTab="CHỜ XÁC NHẬN"
          dataOrder={dataOrder}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
    {
      key: "2",
      label: `ĐANG XỬ LÍ`,
      children: (
        <TableSale
          keyTab="ĐANG XỬ LÍ"
          dataOrder={dataOrder}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
    {
      key: "3",
      label: `ĐANG GIAO`,
      children: (
        <TableSale
          keyTab="ĐANG GIAO"
          dataOrder={dataOrder}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
    {
      key: "4",
      label: `HOÀN THÀNH`,
      children: (
        <TableSale
          keyTab="HOÀN THÀNH"
          dataOrder={dataOrder}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
    {
      key: "5",
      label: `ĐÃ HUỶ`,
      children: (
        <TableSale
          keyTab="ĐÃ HUỶ"
          dataOrder={dataOrder}
          status={status}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
    {
      key: "6",
      label: `GỬI LẠI`,
      children: (
        <TableSale
          keyTab="GỬI LẠI"
          dataOrder={dataOrder}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
    {
      key: "7",
      label: `ĐÃ NHẬN`,
      children: (
        <TableSale
          keyTab="ĐÃ NHẬN"
          dataOrder={dataOrder}
          getDataSellOrder={getDataSellOrder}
        />
      ),
    },
  ];
  return (
    <div className="manager-sale-order">
      <Tabs defaultActiveKey="0" items={items} onChange={onChange} />
    </div>
  );
}
