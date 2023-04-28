import React, {useEffect, useState} from "react";
import "./index.scss";
import {Formik} from "formik";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {InputGlobal} from "@app/components/InputGlobal";
import {UserOutlined} from "@ant-design/icons";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import ApiUser from "@app/api/ApiUser";
import {useMutation} from "react-query";
import {useDispatch} from "react-redux";
import {loginUser} from "@app/redux/slices/UserSlice";
import {useRouter} from "next/router";
import {notification} from "antd";
import {authFirebase} from "@app/firebase/config";
import {useAuthState} from "react-firebase-hooks/auth";

interface UserAccount {
  email: string;
  password: string;
  OTPCode: string;
}

export function ForgotPassword(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user] = useAuthState(authFirebase);
  const loginSocial = useMutation(ApiUser.loginSocial);

  const [otpScreen, setOtpScreen] = useState("email"); // email || otp

  useEffect(() => {
    if (user) {
      notification.success({
        message: "Đăng nhập thành công",
        duration: 3,
      });
      loginSocial.mutate(
        {
          id: user.uid,
          fullname: user.displayName,
          givenname: "",
          familyname: "",
          imageUrl: user.photoURL,
          email: user.email,
        },
        {
          onSuccess: (res: any) => {
            if (res) {
              dispatch(loginUser(res));
              router.push("/");
            } else {
              notification.error({
                message: "Tài khoản hoặc mật khẩu không chính xác",
              });
            }
          },
        }
      );
      router.push("/");
    }
  }, [user]);

  const initialValues: UserAccount = {
    email: "",
    password: "",
    OTPCode: "",
  };

  const handleLoginPage = (): void => {
    router.push("/login");
  };

  const sendVerifyCode = useMutation(ApiUser.sendVerifyCode);
  const forgotPassword = useMutation(ApiUser.forgotPassword);
  const handleLogin = (value: UserAccount): void => {
    if (otpScreen === "email") {
      sendVerifyCode.mutate(
        {
          email: value.email.trim(),
        },
        {
          onSuccess: (res: any) => {
            setOtpScreen("otp");
            notification.success({
              message: "Mã xác thực đã được gửi tới Email của bạn!",
            });
          },
        }
      );
    } else {
      forgotPassword.mutate(
        {
          email: value.email.trim(),
          verificationCode: value.OTPCode.trim(),
          newPassword: value.password.trim(),
        },
        {
          onSuccess: (res: any) => {
            router.push("/login");
            notification.success({
              message: "Quên mật khẩu thành công!",
            });
          },
        }
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validateOnChange
      validateOnBlur
      // validationSchema={LoginValidation}
    >
      {({handleSubmit}): JSX.Element => {
        return (
          <div className="page-login-container">
            <div className="title-login-form">
              <span style={{fontWeight: 600}}>Quên mật khẩu</span>
              <UserOutlined style={{marginLeft: 5}} />
            </div>
            <span className="text-logo">Chợ sách cũ</span>
            <div className="login-container">
              {otpScreen === "email" && (
                <div className="login-form-item">
                  <InputGlobal
                    name="email"
                    placeholder="Email"
                    prefix={<UserOutlined />}
                    className="input_login"
                    onPressEnter={(): void => handleSubmit()}
                  />
                  <ErrorMessageGlobal name="email" />
                </div>
              )}

              {otpScreen !== "email" && (
                <div className="login-form-item">
                  <InputGlobal
                    name="OTPCode"
                    placeholder="OTPCode"
                    prefix={<UserOutlined />}
                    className="input_login"
                    onPressEnter={(): void => handleSubmit()}
                  />
                  <ErrorMessageGlobal name="email" />
                </div>
              )}

              {otpScreen !== "email" && (
                <div className="login-form-item">
                  <InputGlobal
                    name="password"
                    placeholder="password"
                    prefix={<UserOutlined />}
                    className="input_login"
                    onPressEnter={(): void => handleSubmit()}
                  />
                  <ErrorMessageGlobal name="email" />
                </div>
              )}

              <div className="forgot-password-wrap">
                <div>.</div>

                <div>
                  <span
                    onClick={handleLoginPage}
                    className="forgot-password_link"
                  >
                    Đăng nhập
                  </span>
                </div>
              </div>

              <ButtonGlobal
                onClick={handleSubmit}
                className="btn-login"
                title={
                  otpScreen === "email" ? "Nhập Email" : "Nhập OTP - mật khẩu"
                }
                type="primary-filled"
                loading={sendVerifyCode.isLoading || forgotPassword.isLoading}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
