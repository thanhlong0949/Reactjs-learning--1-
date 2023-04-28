import Avatar from "antd/lib/avatar/avatar";
import {
  UserOutlined,
  SearchOutlined,
  MoreOutlined,
  PlusCircleFilled,
  SendOutlined,
} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import "./index.scss";
import {Input} from "antd";
import SockJS from "sockjs-client";
import {over} from "stompjs";
import {useSelector} from "react-redux";
import {IRootState} from "@app/redux/store";

let stompClient: any = null;
export default function ContentChat() {
  const user = useSelector((state: IRootState) => state.user);
  const [tab, setTab] = useState<string | string[] | undefined>("");
  const [message, setMessage] = useState<string>("");
  const [privateChats, setPrivateChats] = useState(new Map());
  const router = useRouter();
  const {seller} = router.query;

  const connect = () => {
    const Sock = new SockJS("https://lobster-app-uadur.ondigitalocean.app/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };
  console.log("stompClient", stompClient);

  const onConnected = () => {
    stompClient.subscribe("/user/" + user.name + "/private", onPrivateMessage);
    userJoin();
  };

  const userJoin = () => {
    const chatMessage = {
      senderName: user.name,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onPrivateMessage = (payload: any) => {
    console.log("onPrivateMessage", payload);
    const payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      const list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err: any) => {
    console.log("err", err);
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      const chatMessage = {
        senderName: user.name,
        receiverName: tab,
        message: message,
        status: "MESSAGE",
      };

      if (user.name !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setMessage("");
    }
  };

  const handleRendermess = () => {
    if (privateChats.get(tab)) {
      return [...privateChats.get(tab)].map((mess, index) => {
        if (mess.senderName === user.name) {
          return (
            <div className="mess-right">
              <div className="des-mess">{mess.message}</div>
            </div>
          );
        }
        return (
          <div className="mess-left">
            <div className="mess-main">
              <Avatar icon={<UserOutlined />} />
              <div className="des-mess">{mess.message}</div>
            </div>
          </div>
        );
      });
    }
    return <div />;
  };

  useEffect(() => {
    setTab(seller);
    if (!privateChats.get(seller)) {
      privateChats.set(seller, []);
      setPrivateChats(new Map(privateChats));
    }
  }, [router.query]);

  useEffect(() => {
    if (tab) {
      connect();
    }
  }, [tab]);

  return (
    <div className="content-chat">
      <div className="nav-chat">
        <div className="nav-left">
          <Avatar icon={<UserOutlined />} />
          <div className="name">{tab}</div>
        </div>
        <div className="nav-right">
          <SearchOutlined />
          <MoreOutlined />
        </div>
      </div>
      <div className="content-chat-mess">{handleRendermess()}</div>
      <div className="control-mess">
        <PlusCircleFilled />
        <Input
          size="small"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <SendOutlined
          onClick={() => {
            if (!message) {
              return;
            }
            sendPrivateValue();
          }}
        />
      </div>
    </div>
  );
}
