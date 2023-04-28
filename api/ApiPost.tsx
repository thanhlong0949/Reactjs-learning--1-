import {fetcher} from "./Fetcher";

const path = {
  post: "/post/create-post",
  postKeyWord: "/book/get-all-author-by-Key-word",
};

function creatPost(data: any) {
  return fetcher({url: path.post, method: "post", data: data});
}
function getAuthorByKeyWord(params: any) {
  return fetcher({url: path.postKeyWord, method: "get", params});
}

export default {
  creatPost,
  getAuthorByKeyWord,
};
