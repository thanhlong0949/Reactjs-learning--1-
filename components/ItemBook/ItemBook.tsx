import React from "react";
import "./item-book.scss";
import {Image, Avatar, Badge} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {getMoneyFormat} from "@app/utils/convert/ConvertHelper";

interface IItemBook {
  data?: any;
  keyPage?: string;
}
export default function ItemBook(props: IItemBook): JSX.Element {
  const {data, keyPage} = props;
  console.log(keyPage);
  return (
    <div className="items">
      {keyPage === "buy" ? (
        <div className="items-user">
          <Avatar size="small" icon={<UserOutlined />} />
          <div className="name-user">
            <Badge
              size="small"
              count={
                keyPage === "buy"
                  ? `Người bán: ${data?.sellerName}`
                  : "Nguyễn Văn A"
              }
              color="green"
            />
          </div>
        </div>
      ) : null}

      <div className="items-book">
        <div className="image">
          <Image width={50} src={data?.postImage} preview={false} />
        </div>
        <div className="infor-book">
          <div className="infor-left">
            <div className="name">{data?.title}</div>
          </div>
          <div className="infor-right">
            <div className="price">{getMoneyFormat(data?.amount)} VND</div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "8px",
          marginTop: "5px",
          fontSize: "medium",
          fontWeight: "500",
        }}
        className="name"
      >
        Mã đơn hàng: {data?.orderCode ?? "ABCDEF123"}
      </div>
      {keyPage === undefined ? (
        <>
          <div style={{marginLeft: "8px", marginTop: "5px"}}>
            Địa chỉ: {data?.shipAddress}
          </div>
          <div style={{marginLeft: "8px", marginTop: "5px"}}>
            Số điện thoại: {data?.phoneNumber}
          </div>
          <div style={{marginLeft: "8px", marginTop: "5px"}}>
            Người nhận: {data?.receiverName}
          </div>
        </>
      ) : null}
    </div>
  );
}
