import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Avatar, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import classNames from "classnames";
import "./index.scss";
import ApiUser, {IGetUserResponse} from "@app/api/ApiUser";
import {useQuery} from "react-query";

export default function SideBarChat() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [data, setData] = useState<IGetUserResponse[]>([]);
  const handleGetAllUser = () => {
    return ApiUser.getAllUser();
  };

  const getAllUser = useQuery("GET_ALL_USER", handleGetAllUser, {
    onSuccess: (data) => {
      setData(data);
      // router.push(`/chat-seller?seller=${data[0]?.name}`);
    },
  });

  useEffect(() => {
    getAllUser.refetch();
  }, []);

  const renderUser = () => {
    return data.map((el, index) => (
      <div
        className={classNames("user", {active: active === index})}
        key={index}
        onClick={() => {
          setActive(index);
          router.push(`/chat-seller?seller=${el.name}`);
        }}
      >
        <div className="user-left">
          <Avatar src={el.userImage} icon={<UserOutlined />} />
          <div className="status" />
        </div>
        <div className="user-right">
          <div className="name-user">{el.name}</div>
          {/* <div className="mess-latest"> */}
          {/*  <div className="sender">{el.sender}</div>: */}
          {/*  <div className="mess-content">{el.content}</div> */}
          {/* </div> */}
        </div>
      </div>
    ));
  };

  return (
    <div className="sidebar-chat">
      <div className="search">
        <Input.Search placeholder="Tìm kiếm" />
      </div>
      <div className="list-user">{renderUser()}</div>
    </div>
  );
}
