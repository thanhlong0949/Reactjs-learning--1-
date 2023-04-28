import React, {ReactElement, useState} from "react";
import "./index.scss";
import Navbar from "@app/components/Layout/Navbar/Navbar";
import {SideBarUserProfile} from "@app/module/user_profile/Components/SideBarUserProfile";
import Config from "@app/config";
import {
  CloudUploadOutlined,
  DollarCircleOutlined,
  GlobalOutlined,
  SelectOutlined,
  SlidersOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import {UserInfor} from "@app/module/user_profile/Components/ListTab/UserInfor";
import {Address} from "@app/module/user_profile/Components/ListTab/Address";
import {ManagerSaleOrder} from "@app/module/user_profile/Components/ListTab/ManagerSaleOrder";
import {PurchaseOrderManagerment} from "@app/module/user_profile/Components/ListTab/PurchaseOrderManagerment";
import {HistoryPost} from "@app/module/user_profile/Components/ListTab/HistoryPost";
import {Complaint} from "@app/module/user_profile/Components/ListTab/Complaint";
import HistoryPayment from "@app/module/user_profile/Components/ListTab/HistoryPayment";

export function UserProfile(): JSX.Element {
  const [keyTab, setKeyTab] = useState<string>("UserInfor");

  const clickTab = () => {
    let element: ReactElement = <UserInfor />;
    switch (keyTab) {
      case "UserInfor":
        element = <UserInfor />;
        break;
      case "Address":
        element = <Address />;
        break;
      case "ManagerSaleOrder":
        element = <ManagerSaleOrder />;
        break;
      case "PurchaseOrderManagerment":
        element = <PurchaseOrderManagerment />;
        break;
      case "HistoryPost":
        element = <HistoryPost />;
        break;
      case "HistoryPayment":
        element = <HistoryPayment />;
        break;
      case "Complaint":
        element = <Complaint />;
        break;
      default:
        element = <UserInfor />;
    }
    return element;
  };
  const TabListUserProfile = [
    {
      tabName: "Thông tin tài khoản",
      key: "UserInfor",
      icon: <UserOutlined />,
    },
    {
      tabName: "Số địa chỉ",
      key: "Address",
      icon: <GlobalOutlined />,
    },
    {
      tabName: "Quản lí đơn bán",
      key: "ManagerSaleOrder",
      icon: <SelectOutlined />,
    },
    {
      tabName: "Quản lí đơn mua",
      key: "PurchaseOrderManagerment",
      icon: <DollarCircleOutlined />,
    },
    {
      tabName: "Lịch sử bài đăng",
      key: "HistoryPost",
      icon: <CloudUploadOutlined />,
    },
    {
      tabName: "Lịch sử giao dịch",
      key: "HistoryPayment",
      icon: <BookOutlined />,
    },
    {
      tabName: "Quản lí khiếu nại",
      key: "Complaint",
      icon: <SlidersOutlined />,
    },
  ];

  return (
    <div className="user_profile_container">
      <Navbar />
      <div
        className="user_profile_main"
        style={{marginTop: Config.HEIGHT_NAVBAR}}
      >
        <div className="side-bar-profile">
          <SideBarUserProfile
            setKeyTab={setKeyTab}
            TabListUserProfile={TabListUserProfile}
          />
        </div>
        <div className="main_content">
          <div className="tab">{clickTab()}</div>
        </div>
      </div>
    </div>
  );
}
