import {fetcher} from "./Fetcher";
import {Key} from "react";

const path = {
  category: "/category/get-all-category-and-subcategory",
  get_all_post: "/post/search-post-by-Keyword",
};

function getAllPost(params: {
  keyWord?: string | null;
  sortBy?: string | null;
  filter?: string | null;
}) {
  return fetcher({
    url: `${path.get_all_post}`,
    method: "get",
    params: params,
  });
}

function getKindBook(params: {
  subcategoryId?: number | string | string[] | undefined;
  sortBy?: string;
  filter?: string;
}) {
  return fetcher({
    url: `/post/get_all_post_by_subcategoryId`,
    method: "get",
    params: params,
  });
}

function getCategory() {
  return fetcher({url: path.category, method: "get"});
}

function getBookDetail(postId: string | number) {
  return fetcher({url: `/book/get-all-book-by/${postId}`, method: "get"});
}

function searchPost(search: string) {
  return fetcher({
    url: `/post/search-post-by-Keyword/${search}`,
    method: "get",
  });
}

function getCategoryDetail() {
  return fetcher({url: `/category/get-all-category`, method: "get"});
}

function getAllCity(): Promise<any> {
  return fetcher({url: `/address/get_all_city_in_list_post`, method: "get"});
}

function getSubcategoryDeatail(id: number | string) {
  return fetcher({
    url: `/subcategory/get-all-subcategory/${id}`,
    method: "get",
  });
}

function getAllSellOrder(id: number, status: string): Promise<any> {
  return fetcher({
    url: `/order/get_All_Sell_Order`,
    method: "get",
    params: {
      userId: id,
      status: status,
    },
  });
}

function getAllBoughOrder(id: number, status: string): Promise<any> {
  return fetcher({
    url: `/order/get_All_Bought_Order`,
    method: "get",
    params: {
      userId: id,
      status: status,
    },
  });
}

function cancelOrderByOrderId(
  orderId: number,
  cancelReason: string
): Promise<any> {
  return fetcher({
    url: `/order/cancel_order_by_orderId`,
    method: "put",
    params: {
      orderId: orderId,
      cancelReason: cancelReason,
    },
  });
}

function convertOrderStatus(params: {orderId: number}): Promise<any> {
  return fetcher({
    url: `/order/convert-order-status_by_orderId`,
    method: "put",
    params: params,
  });
}

function cancelOrder(params: {
  orderId: number;
  cancelReason: string;
}): Promise<any> {
  return fetcher({
    url: `/order/cancel_order_by_orderId`,
    method: "put",
    params: params,
  });
}

function updateResentDate(params: {
  orderId: number;
  resentDate: any;
}): Promise<any> {
  return fetcher({
    url: `/order/update_resent_date`,
    method: "put",
    params: params,
  });
}

function getAllMyPostByUseId(email: string): Promise<any> {
  return fetcher({
    url: `/post/get_all_my_post_by_email`,
    method: "get",
    params: {
      email: email,
    },
  });
}

function updatePostStatus(params: {id: number}): Promise<any> {
  return fetcher({
    url: `/post/update-post-status/${params.id}`,
    method: "put",
  });
}

function createNewOrder(params: {
  postId: any;
  userId: number;
  paymentMethod: string;
  note: string;
  shipAddress: string | string[] | undefined;
  amount: Key;
}): Promise<any> {
  return fetcher({
    url: "/order/create-new-order-with-my-wallet",
    method: "post",
    data: params,
  });
}

function createNewOrderMoMO(params: {
  postId: number | string | string[] | undefined;
  userId: number;
  paymentMethod: string;
  note: string;
  successUrl: string;
  failUrl: string;
  shipAddress: string;
}): Promise<any> {
  return fetcher({
    url: "/order/create-new-order-with-momo",
    method: "post",
    data: params,
  });
}
function updatePost(params: any): Promise<any> {
  return fetcher({
    url: "/post/update-post-info",
    method: "put",
    data: params,
  });
}
function updateBook(params: any): Promise<any> {
  return fetcher({
    url: "/book/update-book-information",
    method: "put",
    data: params,
  });
}

export default {
  getAllPost,
  getCategory,
  getKindBook,
  getBookDetail,
  searchPost,
  getCategoryDetail,
  getSubcategoryDeatail,
  getAllCity,
  getAllSellOrder,
  cancelOrderByOrderId,
  convertOrderStatus,
  getAllBoughOrder,
  getAllMyPostByUseId,
  createNewOrder,
  createNewOrderMoMO,
  cancelOrder,
  updatePostStatus,
  updateResentDate,
  updateBook,
  updatePost,
};
