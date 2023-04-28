import React, {useContext, useEffect, useState} from "react";
import {
  Avatar,
  Button,
  Image,
  Input,
  Dropdown,
  Space,
  Modal,
  Form,
  notification,
} from "antd";
import {
  PhoneOutlined,
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  ExclamationCircleFilled,
  LockOutlined,
  PlusCircleOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
import Config from "@app/config";
// import store from "@app/redux/store";
import {useSelector} from "react-redux";
import {logout} from "@app/api/Fetcher";
import ApiUser from "@app/api/ApiUser";
import {useAuthState} from "react-firebase-hooks/auth";
import {authFirebase} from "@app/firebase/config";
import {ContextSearchHome} from "@app/components/Layout/Sidebar/ContextProvider/ContextSearchHome";
import {getMoneyFormat} from "@app/utils/convert/ConvertHelper";
import {notificationError, notificationSuccess} from "@app/utils/notification";

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  // const [search, setSearch] = useState<string>();
  // const [defaultSeach, setDefaultSeach] = useState(router.query.search);
  const user = useSelector((state: any) => state.user);
  const avatar = user?.imageUrl;
  const [form] = Form.useForm();
  const [userSocial] = useAuthState(authFirebase);
  const {setSearchHomeListBook} = useContext(ContextSearchHome);
  const [valueChangeSearch, setValueChangeSearch] = useState("null");
  const [moneyUser, setMoneyUser] = useState<any>();
  const [moneyRechange, setMoneyRechange] = useState<string>();
  const [nameBook, setNameBook] = useState<string>();
  const [checkmoneyRechange, setCheckMoneyRechange] = useState<number>(0);
  const handleSearch = (valueSearch: any): void => {
    setValueChangeSearch(
      valueSearch.target.value.length === 0 ? "null" : valueSearch.target.value
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalNoti, setIsOpenModalNoti] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (moneyRechange) {
      const data = {
        userId: user?.id,
        depositAmount: parseInt(moneyRechange, 10),
      };
      ApiUser.rechargeMoney(data).then((res) => {
        if (res) {
          window.open(res.body.payUrl);
          setIsModalOpen(false);
          setMoneyRechange("");
          setCheckMoneyRechange(checkmoneyRechange + 1);
        } else {
          notificationError("Đã có lỗi xảy ra vui lòng thử lại sau!");
        }
      });
    } else {
      notificationError("Vui lòng nhập số tiền cần nạp!");
    }
  };

  const handleOkNotify = () => {
    if (nameBook) {
      const data = {
        userId: user?.id,
        bookReceive: nameBook,
      };
      ApiUser.createBookNoti(data)
        .then((res) => {
          notificationSuccess(
            `Đăng ký thông báo cho cuốn ${nameBook} thành công `
          );
          setIsOpenModalNoti(false);
          setNameBook("");
        })
        .catch((err) => {
          notificationError("Đã có lỗi xảy ra vui lòng thử lại sau!");
        });
    } else {
      notificationError("Vui lòng nhập tên sách muốn nhận thông báo");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setMoneyRechange("");
    setIsOpenModalNoti(false);
  };

  const toPageSearch = (): void => {
    router.push(`/`);
    if (valueChangeSearch) {
      setSearchHomeListBook(valueChangeSearch);
    }
  };
  const toSelfBook = (): void => {
    if (user?.id) {
      router.push(`/self_book`);
    } else {
      Modal.confirm({
        title: "Tính năng này cần đăng nhập",
        content: "Bạn có muốn đăng nhập không?",
        onOk: () => {
          router.push(`/login`);
        },
      });
    }
  };
  const goToHomePage = (): void => {
    router.push("/home");
  };
  const goToLoginPage = (): void => {
    router.push("/login");
  };
  const goToRegisterPage = (): void => {
    router.push("/register");
  };

  const validateConfirmPassword = ({getFieldValue}: any) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue("newPassword") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Mật khẩu nhập lại không khớp"));
    },
  });

  const handleChangePass = (data: any) => {
    const putData = {
      ...data,
      email: user?.email,
    };
    ApiUser.changePass(putData).then((res) => {
      if (res) {
        notification.success({
          message: "Đổi mật khẩu thành công",
        });
        setOpenModal(false);
      } else {
        notification.error({
          message: "Đổi mật khẩu thất bại",
        });
      }
    });
  };

  useEffect(() => {
    if (user) {
      const params = {
        userId: user?.id,
      };
      ApiUser.getMoneyUser(params).then((res) => {
        setMoneyUser(res);
      });
    }
  }, [checkmoneyRechange]);

  const items = [
    {
      key: "1",
      label: (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className="" onClick={() => router.push("/user_profile")}>
          Thông tin cá nhân
        </div>
      ),
      icon: <InfoCircleOutlined />,
    },
    {
      key: "2",
      label: (
        <div>
          <div className="">Số dư tài khoản: </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {getMoneyFormat(moneyUser?.amount ?? 0)} VNĐ
            <PlusCircleOutlined
              style={{marginLeft: 10}}
              color="#0000FF"
              onClick={showModal}
            />
          </div>
        </div>
      ),
    },
    {
      key: "2.4",
      label: (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onClick={() => {
            setIsOpenModalNoti(true);
          }}
        >
          Thông báo nhận sách
        </div>
      ),
      icon: <NotificationOutlined />,
    },
    {
      key: "3",
      label: (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className="" onClick={toSelfBook}>
          Bán sách
        </div>
      ),
      icon: <LockOutlined />,
    },
    {
      key: "4",
      label: (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className=""
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Đổi mật khẩu
        </div>
      ),
      icon: <LockOutlined />,
    },
    {
      key: "5",
      label: (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className=""
          onClick={() => {
            const showConfirm = () => {
              Modal.confirm({
                title: "Bạn chắc chắn muốn đăng xuất?",
                icon: <ExclamationCircleFilled />,
                onOk() {
                  if (userSocial) {
                    authFirebase.signOut();
                    notification.success({
                      message: "Đăng xuất thành công",
                      duration: 3,
                    });
                  } else {
                    logout();
                    router.push("/");
                  }
                },
                onCancel() {
                  // console.log('Cancel');
                },
              });
            };
            showConfirm();
          }}
        >
          Đăng xuất
        </div>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div className="navbar" style={{height: Config.HEIGHT_NAVBAR}}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div onClick={goToHomePage} className="logo">
        <Image width={80} height={40} preview={false} src="/logo_book.jpg" />
      </div>
      <div className="search-navbar">
        <Input
          placeholder="Tìm Kiếm Sách ..."
          className="input-search"
          prefix={<SearchOutlined />}
          // value={valueChangeSearch === "null" ? "" : valueChangeSearch}
          onChange={handleSearch}
        />
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div onClick={toPageSearch} className="button-search">
          <Button>Tìm kiếm</Button>
        </div>
        {/* <div onClick={toSelfBook} className="button-self-book"> */}
        {/*  <Button>Bán sách</Button> */}
        {/* </div> */}
      </div>
      <div className="action-navbar">
        <Icon icon="Bell" size={15} color="white" />
        <div className="contact-navbar">
          <span className="text-contact">Liên Hệ</span>
          <PhoneOutlined style={{color: "white"}} />
        </div>
        <div className="author-navbar">
          {user?.accesstoken ? (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              className="author-infor"
              onClick={() => {
                setCheckMoneyRechange(checkmoneyRechange + 1);
              }}
            >
              <Dropdown menu={{items}}>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar icon={<UserOutlined />} src={avatar} />
                    {user.name.slice(0, 15) +
                      (user.name?.length > 15 ? "..." : "")}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          ) : userSocial ? (
            <Dropdown menu={{items}}>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar icon={<UserOutlined />} src={userSocial.photoURL} />
                  {userSocial.displayName}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <div className="author-login-resgister">
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <span onClick={goToLoginPage} className="text-hover">
                Đăng nhập
              </span>
              <span className="vertical">|</span>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <span onClick={goToRegisterPage} className="text-hover">
                Đăng kí
              </span>
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Đổi mật khẩu"
        open={openModal}
        destroyOnClose
        footer={[]}
        onCancel={() => setOpenModal(false)}
        width={600}
      >
        <Form
          name="basic"
          labelAlign="left"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          onFinish={(data) => {
            handleChangePass(data);
          }}
          style={{padding: "8px"}}
          form={form}
          autoComplete="off"
          colon={false}
          id="form-changePass"
        >
          <Form.Item
            label="Mật khẩu cũ"
            rules={[{required: true, message: "Vui lòng nhập trường này"}]}
            name="oldPassword"
          >
            <Input placeholder="Nhập mật khẩu cũ" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu mới"
            name="newPassword"
            rules={[
              {required: true, message: "Vui lòng nhập trường này"},
              {min: 6, message: "Mật khẩu có độ dài tối thiểu 6 kí tự"},
            ]}
          >
            <Input placeholder="Nhập mật khẩu mới" />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            rules={[
              {required: true, message: "Vui lòng nhập trường này"},
              {min: 6, message: "Mật khẩu có độ dài tối thiểu 6 kí tự"},
              validateConfirmPassword,
            ]}
            name="confirmPassword"
          >
            <Input placeholder="Nhập lại mật khẩu" />
          </Form.Item>
        </Form>
        <div className="btn" style={{textAlign: "center", marginTop: "24px"}}>
          <Button htmlType="submit" form="form-changePass" type="primary">
            Xác nhận
          </Button>
        </div>
      </Modal>
      <Modal
        title="Vui lòng nhập số tiền cần nạp: (VNĐ)"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Hủy"
        okText="Nạp"
      >
        <Input
          type="number"
          placeholder="Nhập số tiền tại đây"
          value={moneyRechange}
          onChange={(e) => setMoneyRechange(e.target.value)}
        />
      </Modal>
      <Modal
        title="Điền sách muốn nhận thông báo"
        open={isOpenModalNoti}
        onOk={handleOkNotify}
        onCancel={handleCancel}
        cancelText="Hủy"
        okText="Xác nhận"
      >
        <Input
          placeholder="Nhập tên sách....."
          value={nameBook}
          onChange={(e) => setNameBook(e.target.value)}
        />
      </Modal>
    </div>
  );
}
