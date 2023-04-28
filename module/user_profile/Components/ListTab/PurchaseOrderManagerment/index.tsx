import React, {useEffect, useState} from "react";
import "./index.scss";
import {Tabs, TabsProps} from "antd";
import {TableBuy} from "@app/module/user_profile/Components/TableBuy";
import ApiBook from "@app/api/ApiBook";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";

export function PurchaseOrderManagerment(): JSX.Element {
  const user = useSelector((state: any) => state.user);
  const [status, setStatus] = useState<string>("WaitingForConfirmation");
  const [dataOrder, setDataOrder] = useState();
  const [check, setCheck] = useState("");
  const onChange = (key: string) => {
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
    }
  };

  const key = "buy";

  // list api
  const getDataListBoughtOrder = (): Promise<any> =>
    ApiBook.getAllBoughOrder(user?.id, status);
  const getDataBoughtOrder = useQuery(
    "GET_DATA_LIST_BOUGHT_ORDER",
    getDataListBoughtOrder,
    {
      onSuccess: (res) => {
        setDataOrder(res);
      },
    }
  );

  useEffect(() => {
    getDataBoughtOrder.refetch();
  }, [status, check]);
  useEffect(() => {
    if (check === "load") {
      getDataBoughtOrder.refetch();
    }
  }, [check]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `CHỜ XÁC NHẬN`,
      children: (
        <TableBuy
          keyPage={key}
          dataOrder={dataOrder}
          getDataBoughtOrder={getDataBoughtOrder}
        />
      ),
    },
    {
      key: "2",
      label: `ĐANG XỬ LÍ`,
      children: (
        <TableBuy
          keyPage={key}
          dataOrder={dataOrder}
          status={status}
          setCheck={setCheck}
          getDataBoughtOrder={getDataBoughtOrder}
        />
      ),
    },
    {
      key: "3",
      label: `ĐANG GIAO`,
      children: (
        <TableBuy
          keyPage="ĐANG GIAO"
          dataOrder={dataOrder}
          getDataBoughtOrder={getDataBoughtOrder}
        />
      ),
    },
    {
      key: "4",
      label: `HOÀN THÀNH`,
      children: (
        <TableBuy
          keyPage="HOÀN THÀNH"
          dataOrder={dataOrder}
          getDataBoughtOrder={getDataBoughtOrder}
        />
      ),
    },
    {
      key: "5",
      label: `ĐÃ HUỶ`,
      children: (
        <TableBuy
          keyPage="ĐÃ HUỶ"
          dataOrder={dataOrder}
          getDataBoughtOrder={getDataBoughtOrder}
        />
      ),
    },
    {
      key: "6",
      label: `HOÀN LẠI`,
      children: (
        <TableBuy
          keyPage="HOÀN LẠI"
          dataOrder={dataOrder}
          getDataBoughtOrder={getDataBoughtOrder}
        />
      ),
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="0" items={items} onChange={onChange} />
    </div>
  );
}
