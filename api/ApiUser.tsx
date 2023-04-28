import {fetcher} from "./Fetcher";
import store from "../redux/store";
import {Key} from "react";

export interface ILoginBody {
  email: string;
  password: string;
  fcmKey?: string;
}
export interface ILoginResponse {
  successCode?: string;
  data: {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    gender: string;
    imageUrl: string;
    dob: string;
    password: string;
    accesstoken?: string;
  };
}

export interface IParamsGetUser {
  sort?: string[];
  searchFields?: string[];
  pageSize?: number;
  pageNumber?: number;
  disablePagination?: boolean;
  search?: string;
  searchType?: string;
}

export interface IGetUserResponse {
  id: number;
  name?: string;
  email?: string;
  phoneNumber?: string | null;
  gender?: string;
  imageUrl?: string;
  userImage?: string;
  dob?: string;
  password?: string;
}

export interface IRegisterBody {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
}

const path = {
  getUser: "/auth/get-user-info-by-email",
  login: "/auth/login",
  register: "/auth/register-user",
  updateUser: "/auth/update-user-infor",
  changePass: "/auth/change_password",
  getMoney: "/wallet/view-money-in-wallet",
  getAllUser: "/auth/get-all-user",
};

function register(body: IRegisterBody): Promise<never> {
  return fetcher({url: path.register, method: "post", data: body});
}

function login(body: ILoginBody): Promise<ILoginResponse> {
  return fetcher(
    {url: path.login, method: "post", data: body},
    {displayError: true}
  );
}

function sendVerifyCode(param: {email: string}): Promise<ILoginResponse> {
  return fetcher(
    {url: "/auth/send-verificationCodes", method: "put", params: param},
    {displayError: true}
  );
}

function forgotPassword(param: {
  email: string;
  verificationCode: string;
  newPassword: string;
}): Promise<ILoginResponse> {
  return fetcher(
    {url: `/auth/forgot-password`, method: "put", data: param},
    {displayError: true}
  );
}

function loginSocial(body: any): Promise<ILoginResponse> {
  return fetcher(
    {url: "/auth/login_google", method: "post", data: body},
    {displayError: true}
  );
}

function getUser(): Promise<IGetUserResponse> {
  return fetcher({
    url: `${path.getUser}/${store.getState()?.user?.id}`,
    method: "get",
  });
}
function getMoneyUser(params: {userId: Key}): Promise<any> {
  return fetcher({
    url: `${path.getMoney}`,
    method: "get",
    params: params,
  });
}

function rechargeMoney(body: any): Promise<any> {
  return fetcher(
    {url: "/wallet/recharge-into-wallet", method: "post", params: body},
    {displayError: true}
  );
}
function createBookNoti(body: any): Promise<any> {
  return fetcher(
    {url: "/book/create-book-to-get-noti", method: "post", params: body},
    {displayError: true}
  );
}

function getUserInfoSocial(params: {email: string}): Promise<any> {
  return fetcher({
    url: `/auth/get-user-info-by-email`,
    method: "get",
    params: params,
  });
}
function getTopUser(): Promise<any> {
  return fetcher({
    url: `/auth/get_users_has_highest_order_complete`,
    method: "get",
  });
}
function getPopularGenre(): Promise<any> {
  return fetcher({
    url: `/subcategory/get-publication-subcategory`,
    method: "get",
  });
}
function getTopPosts(): Promise<any> {
  return fetcher({
    url: `/post/get-all-new-post`,
    method: "get",
  });
}
function getHistoryPayment(params: any): Promise<any> {
  return fetcher({
    url: `/transaction/get-all-transaction`,
    method: "get",
    params: params,
  });
}

function updateUser(data: any) {
  return fetcher({url: path.updateUser, method: "put", data: data});
}

function changePass(data: any) {
  return fetcher({url: path.changePass, method: "put", data: data});
}

function isLogin(): boolean {
  const {user} = store.getState();
  return !!user?.accesstoken;
}
function getAllUser(): Promise<IGetUserResponse[]> {
  return fetcher({url: path.getAllUser, method: "get"});
}

export default {
  login,
  isLogin,
  getUser,
  register,
  updateUser,
  changePass,
  loginSocial,
  getUserInfoSocial,
  getMoneyUser,
  rechargeMoney,
  getTopUser,
  getPopularGenre,
  getTopPosts,
  createBookNoti,
  sendVerifyCode,
  forgotPassword,
  getAllUser,
  getHistoryPayment,
};
