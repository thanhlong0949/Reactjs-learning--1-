import React, {useEffect, useState} from "react";
import "./index.scss";
import Navbar from "@app/components/Layout/Navbar/Navbar";
import {Icon} from "@app/components/Icon";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Image,
  Input,
  Modal,
  Radio,
} from "antd";
import {
  BankOutlined,
  CheckCircleFilled,
  CommentOutlined,
  PoundOutlined,
  ProfileOutlined,
  SwitcherOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {BreakCrumGlobal} from "@app/components/BreakCrumGlobal";
import {useMutation} from "react-query";
import ApiBook from "@app/api/ApiBook";
import {notificationError, notificationSuccess} from "@app/utils/notification";
import {useSelector} from "react-redux";
import ApiAddress from "@app/api/ApiAddress";
import {getMoneyFormat} from "@app/utils/convert/ConvertHelper";
import {CheckboxValueType} from "antd/es/checkbox/Group";

const {TextArea} = Input;
export function Payment(): JSX.Element {
  const router = useRouter();
  const {keyPage} = router.query;
  const [valuePay, setValuePay] = useState<any>();
  const user = useSelector((state: any) => state.user);
  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [dataAddress, setDataAddress] = useState<any>([]);
  const [addressSelect, setAddressSelect] = useState<string>();
  const [dataPost, setDataPost] = useState<any>();

  const handleChangeAddress = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (router.query.postId) {
      ApiBook.getBookDetail(router.query.postId as string).then((res: any) => {
        setDataPost(res?.[0]);
      });
    }
  }, [router.query]);

  /// call địa chỉ

  useEffect(() => {
    if (user?.id) {
      ApiAddress.getAddressByUserId(user?.id).then((res) => {
        setDataAddress(res);
        setAddressSelect(
          `${res?.[0]?.street}, ${res?.[0]?.ward}, ${res?.[0]?.district}, ${res?.[0]?.city}`
        );
      });
    }
  }, []);

  const createNewOrder = useMutation(ApiBook.createNewOrder);
  const createNewOrderMomo = useMutation(ApiBook.createNewOrderMoMO);

  const handleCreateNewOrder = (): void => {
    if (valuePay) {
      if (valuePay.length === 1) {
        if (valuePay?.[0] === "Ví Của Tôi") {
          createNewOrder.mutate(
            {
              postId: router.query.postId,
              userId: user?.id,
              paymentMethod: "VÍ CỦA TÔI",
              note: "string",
              amount: 0,
              shipAddress: addressSelect,
            },
            {
              onSuccess: (res) => {
                if (res) {
                  notificationSuccess("Thành công!");
                  router.replace("/");
                } else {
                  notificationError("Đơn hàng đã tồn tại!");
                }
              },
              onError: () => {
                notificationError("Không đủ tiền trong ví, vui lòng thử lại!");
              },
            }
          );
        } else {
          createNewOrderMomo.mutate(
            {
              postId: router.query.postId,
              userId: user?.id,
              paymentMethod: "",
              note: "string",
              successUrl: "string",
              failUrl: "string",
              shipAddress: "",
            },
            {
              onSuccess: (res) => {
                window.open(res.body.payUrl);
              },
              onError: () => {
                notificationError("Đã có lỗi xảy ra, vui lòng thử lại!");
              },
            }
          );
        }
      } else {
        notificationError("Vui lòng chỉ chọn 1 phương thức thanh toán!");
      }
    } else {
      notificationError("Vui lòng chọn phương thức thanh toán!");
    }
  };

  const listBreakcrum = ["Trang chủ", "Tất cả sách", "Trao đổi", "Trao đổi"];
  const listBreakcrumTrade = ["Trang chủ", "Tất cả sách", "Bán", "Thanh toán"];

  const onChange = (e: any) => {
    setValue(e.target.value);
    const data = dataAddress?.filter((item: any) => {
      return item?.id === e.target.value;
    });
    if (data) {
      // eslint-disable-next-line array-callback-return
      data?.map((item: any) => {
        setAddressSelect(
          `${item?.street}, ${item?.ward}, ${item?.district}, ${item?.city}`
        );
      });
    }
  };

  const renderItemAddress = () => {
    return (
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{display: "flex", flexDirection: "column"}}
      >
        <>
          {dataAddress?.map((item: any) => {
            return (
              <Radio value={item?.id} key={item?.id}>
                {item?.street}, {item?.ward}, {item?.district}, {item?.city}
              </Radio>
            );
          })}
        </>
      </Radio.Group>
    );
  };
  const plainOptions = ["VÍ MOMO", "Ví Của Tôi"];

  const onChangeValue = (checkedValues: CheckboxValueType[]) => {
    setValuePay(checkedValues);
  };

  return (
    <div className="payment-container">
      <Navbar />
      <Modal
        title="Thay đổi địa chỉ"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        {renderItemAddress()}
      </Modal>
      <div className="main">
        <BreakCrumGlobal
          listBreakcrum={
            keyPage !== "Trao đổi" ? listBreakcrumTrade : listBreakcrum
          }
        />
        <div>
          <h2>{keyPage !== "Trao đổi" ? "Thanh toán" : "Trao đổi"}</h2>
          <div className="location-given">
            <div className="title">
              <div className="location-text">
                <Icon icon="location" size={20} color="#1890FF" />
                <span>Địa chỉ Người nhận</span>
              </div>
              <Button className="change" onClick={() => handleChangeAddress()}>
                THAY ĐỔI
              </Button>
            </div>
            <div className="detail">
              <div>
                <span>{user?.name}</span>
                <span style={{margin: "0 4px"}}>|</span>
                <span>{user?.phoneNumber}</span>
              </div>
              <p>{addressSelect}</p>
            </div>
          </div>
          <div className="item-book">
            <div className="items">
              <div className="items-user">
                <div style={{display: "flex"}}>
                  <Avatar size="small" icon={<UserOutlined />} />
                  <div className="name-user">
                    <Badge
                      size="small"
                      count={`${
                        keyPage === "Trao đổi" ? "Người bán:" : "Người đăng:"
                      } ${dataPost?.userName}`}
                      color="green"
                      style={{
                        height: "25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                </div>
                <div className="chat">
                  <CommentOutlined style={{color: "#52C41A"}} />
                  <span>Chat</span>
                </div>
              </div>
              <div className="items-book">
                <div className="image">
                  <Image
                    width={85}
                    height={100}
                    src={dataPost?.bookImages[0]?.url}
                    preview={false}
                  />
                </div>
                <div className="infor-book">
                  <div className="infor-left">
                    <div className="name">{dataPost?.name}</div>
                    <div className="des">{dataPost?.coverType}</div>
                    <div className="price">
                      {getMoneyFormat(dataPost?.price)} VNĐ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cost-of-payment">
            <div className="title">
              <BankOutlined style={{color: "orange", fontSize: 20}} />
              <span>
                <b>
                  {keyPage !== "Trao đổi"
                    ? "Số tiền thanh toán"
                    : "Số tiền đặt cọc"}{" "}
                </b>
              </span>
            </div>
            <div className="detail">
              <h4>{keyPage !== "Trao đổi" ? "THANH TOÁN" : "TRAO ĐỔI"}</h4>
              <b>{getMoneyFormat(dataPost?.price)} VNĐ</b>
              <p>
                {keyPage !== "Trao đổi" ? "Thanh toán" : "Trao đổi"} toàn bộ số
                tiền
              </p>
            </div>
            <div className="notifi">
              <CheckCircleFilled
                style={{marginRight: 4, marginLeft: 4, color: "#26a541"}}
              />
              <span>
                Số tiền {keyPage !== "Trao đổi" ? "thanh toán" : "trao đổi"}{" "}
                được đảm bảo trong 7 ngày hoặc đến khi bạn nhận được hàng
              </span>
            </div>
          </div>
          <div className="delivery-method">
            <div className="title">
              <ThunderboltOutlined style={{color: "orange"}} />
              <span>
                <b>Phương thức Giao hàng</b>
              </span>
            </div>
            <div className="detail">
              <PoundOutlined style={{color: "orange", marginRight: 5}} />
              <span>Tự thoả thuận phí giao hàng</span>
            </div>
          </div>
          <div className="payment-method">
            <div className="title">
              <SwitcherOutlined style={{color: "orange", fontSize: 20}} />
              <span>
                <b>Phương thức thanh toán</b>
              </span>
            </div>
            <Checkbox.Group
              style={{marginTop: "10px"}}
              options={plainOptions}
              onChange={onChangeValue}
            />
          </div>
          <div className="payment-accept">
            <span className="row1">
              <b>Thông tin Thanh toán</b>
            </span>
            <div className="row2">
              <div>Số tiền</div>
              <div>{getMoneyFormat(dataPost?.price)} VNĐ</div>
            </div>
            <div style={{overflow: "hidden"}}>
              ............................................................................................................................................................................................................................................................................................................................................................
            </div>
            <div className="row3">
              <div className="title">Tổng thanh toán</div>
              <div className="detail">
                <b>{getMoneyFormat(dataPost?.price)} VNĐ</b>
              </div>
            </div>
            <div className="row4">
              <div className="title">
                <ProfileOutlined style={{fontSize: 19, marginRight: 5}} />
                <span>
                  <b style={{fontSize: 15}}>Ghi chú</b>
                </span>
              </div>
              <TextArea
                placeholder="Nhập ghi chú cho người bán"
                autoSize={{minRows: 3, maxRows: 5}}
              />
            </div>
            <div className="button">
              <Button type="primary" onClick={handleCreateNewOrder}>
                {" "}
                {keyPage !== "Trao đổi" ? "ĐẶT HÀNG" : "TRAO ĐỔI"}{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
