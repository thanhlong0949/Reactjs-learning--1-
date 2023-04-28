import React, {useEffect, useState} from "react";
import "./index.scss";
import {
  Radio,
  Upload,
  Form,
  Input,
  DatePicker,
  Button,
  notification,
} from "antd";
import {PlusOutlined, LoadingOutlined} from "@ant-design/icons";
import ApiUser from "@app/api/ApiUser";
import {upLoadImage} from "@app/utils/firebase/uploadImage";
import moment from "moment";
import store from "@app/redux/store";
import {useAuthState} from "react-firebase-hooks/auth";
import {authFirebase} from "@app/firebase/config";
import {useSelector} from "react-redux";

export function UserInfor(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState<any>();
  const [dataSocial, setDataSocial] = useState<any>();
  const [userSocial] = useAuthState(authFirebase);
  const user = useSelector((state: any) => state.user);

  const handleSubmit = (dataNew: any) => {
    const putData = {
      ...dataNew,
      id: store.getState()?.user?.id,
      dob: moment(dataNew.dob).format("YYYY-MM-DD"),
      imageUrl: imageUrl,
      email: undefined,
      password: store.getState()?.user?.password,
    };
    ApiUser.updateUser(putData)
      .then((res: any) => {
        notification.success({
          message: "Sửa thông tin thành công",
        });
        setData({
          ...res,
          dob: moment(res.dob),
        });
        setImageUrl(res?.imageUrl);
      })
      .catch(() => {
        notification.error({
          message: "Sửa thông tin thất bại",
        });
      });
  };

  const handleChangeUploadImage = async (file: any) => {
    const link = await upLoadImage(file.file);
    setImageUrl(link);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Tải ảnh lên</div>
    </div>
  );

  useEffect(() => {
    if (userSocial) {
      const params: any = {
        email: userSocial?.email,
      };
      ApiUser.getUserInfoSocial(params).then((res) => {
        setDataSocial(res);
      });
    } else {
      const params = {
        email: user?.email,
      };
      ApiUser.getUserInfoSocial(params).then((res) => {
        setDataSocial(res);
      });
    }
  }, []);
  return (
    <div className="user-profile-tab-container">
      <h3>THÔNG TIN TÀI KHOẢN</h3>
      {data && (
        <div style={{width: "60%", margin: "12px auto"}}>
          <Form
            name="basic"
            labelAlign="left"
            labelCol={{span: 6}}
            wrapperCol={{span: 18}}
            onFinish={(data) => {
              handleSubmit(data);
            }}
            onValuesChange={() => {
              setIsEdit(true);
            }}
            initialValues={data}
            autoComplete="off"
            colon={false}
            id="form-profile"
          >
            <Form.Item
              label="Avatar"
              name="imageUrl"
              rules={[{required: true, message: "Vui lòng nhập trường này"}]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={(file) => handleChangeUploadImage(file)}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{width: "100%"}} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item
              label="Họ và tên"
              rules={[{required: true, message: "Vui lòng nhập trường này"}]}
              name="name"
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
            <Form.Item label="Nhập họ và tên" name="phoneNumber">
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[{required: true, message: "Vui lòng nhập trường này"}]}
              name="email"
            >
              <Input disabled placeholder="Nhập email" />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              rules={[{required: true, message: "Vui lòng nhập trường này"}]}
              name="gender"
            >
              <Radio.Group name="gender">
                <Radio value="nam">Nam</Radio>
                <Radio value="nữ">Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              rules={[{required: true, message: "Vui lòng nhập trường này"}]}
              name="dob"
              initialValue={data?.dob}
            >
              <DatePicker
                placeholder="Chọn ngày sinh"
                style={{width: "100%"}}
                format={["DD-MM-YYYY"]}
              />
            </Form.Item>
          </Form>
          <div className="btn" style={{textAlign: "center"}}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={!isEdit}
              style={{marginTop: "24px", textAlign: "center"}}
              form="form-profile"
            >
              Sửa
            </Button>
          </div>
        </div>
      )}
      {dataSocial && (
        <div style={{width: "60%", margin: "12px"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <span style={{width: "25%"}}>Ảnh đại diện</span>
            <img src={dataSocial.photoURL} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <span style={{width: "25%"}}>Nhập họ và tên</span>
            <Input
              placeholder="Nhập họ và tên"
              value={dataSocial.displayName}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <span style={{width: "25%"}}>Nhập số điện thoại</span>
            <Input
              placeholder="Nhập số điện thoại"
              value={dataSocial.phoneNumber ?? "Chưa có dữ liệu"}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <span style={{width: "25%"}}>Email</span>
            <Input disabled placeholder="Nhập email" value={dataSocial.email} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <span style={{width: "25%"}}>Giới tính</span>
            <Input placeholder="Giới tính" value="Nam" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <span style={{width: "25%"}}>Ngày sinh</span>
            <Input placeholder="Ngày sinh" value="19/08/2001" />
          </div>
          <div className="btn" style={{textAlign: "center"}}>
            <Button
              type="primary"
              htmlType="submit"
              style={{marginTop: "24px", textAlign: "center"}}
              form="form-profile"
            >
              Sửa
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
