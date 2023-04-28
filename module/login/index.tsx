import React, {useEffect} from "react";
import "./index.scss";
import {Formik} from "formik";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {InputGlobal, InputPasswordGlobal} from "@app/components/InputGlobal";
import {
  FacebookOutlined,
  GoogleOutlined,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import ApiUser from "@app/api/ApiUser";
import {useMutation} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "@app/redux/slices/UserSlice";
import {useRouter} from "next/router";
import {Image, notification} from "antd";
import {authFirebase} from "@app/firebase/config";
import {signInWithPopup, GoogleAuthProvider} from "@firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";

interface UserAccount {
  email: string;
  password: string;
  pass_jwt: string;
}

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user] = useAuthState(authFirebase);
  const googleAuth = new GoogleAuthProvider();
  const loginSocial = useMutation(ApiUser.loginSocial);
  const handleLoginSocial = async () => {
    const result = await signInWithPopup(authFirebase, googleAuth);
  };
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
          onError: (res: any) => {
            console.log("res", res);
          },
        }
      );
      router.push("/");
    }
  }, [user]);

  const initialValues: UserAccount = {
    email: "",
    password: "",
    pass_jwt: "",
  };

  const handleRegister = (): void => {
    router.push("/register");
  };

  const handleForgotPassword = (): void => {
    router.push("/forgot-password");
  };

  const login = useMutation(ApiUser.login);
  const handleLogin = (value: UserAccount): void => {
    // router.push("/home");
    const tokenFCM = localStorage.getItem("FCMToken");
    login.mutate(
      {
        email: value.email.trim(),
        password: value.password.trim(),
        fcmKey: tokenFCM ?? "",
      },
      {
        onSuccess: (res: any) => {
          if (res && res?.status === "active") {
            dispatch(loginUser(res));
            router.push("/");
          } else if (res?.status === "deactive") {
            notification.error({
              message: "Tài khoản đã bị khoá!",
            });
          } else {
            notification.error({
              message: "Tài khoản hoặc mật khẩu không chính xác",
            });
          }
        },
      }
    );
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
              <span style={{fontWeight: 600}}>Đăng nhập</span>
              <UserOutlined style={{marginLeft: 5}} />
            </div>
            <span className="text-logo">Chợ sách cũ</span>
            <div className="login-container">
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

              <div className="login-form-item">
                <InputPasswordGlobal
                  name="password"
                  placeholder="Password"
                  prefix={<UnlockOutlined />}
                  className="input_login"
                  onPressEnter={(): void => handleSubmit()}
                />
                <ErrorMessageGlobal name="password" />
              </div>

              <div className="forgot-password-wrap">
                <div>.</div>

                <div>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <span
                    onClick={handleRegister}
                    className="forgot-password_link"
                  >
                    Đăng kí
                  </span>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <span
                    onClick={handleForgotPassword}
                    className="forgot-password_link"
                    style={{marginLeft: 5}}
                  >
                    Quên mật khẩu
                  </span>
                </div>
              </div>

              <ButtonGlobal
                onClick={handleSubmit}
                className="btn-login"
                title="Đăng nhập"
                type="primary-filled"
                loading={login.isLoading}
              />
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className="login-social-group" onClick={handleLoginSocial}>
                <div className="item-social">
                  <Image
                    width={25}
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    height={25}
                  />
                  <span>Login by Google</span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
