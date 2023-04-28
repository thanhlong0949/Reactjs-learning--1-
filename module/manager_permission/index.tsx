import "./index.scss";
import {Button, Image, Pagination} from "antd";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
import {BreakCrumGlobal} from "@app/components/BreakCrumGlobal";
import ApiBook from "@app/api/ApiBook";
import {useSelector} from "react-redux";
import FilterGroupGlobal from "@app/components/FilterGroupGlobal";
import {LoadingGlobal} from "@app/components/Loading";
import {useQuery} from "react-query";
import {ContextSearchHome} from "@app/components/Layout/Sidebar/ContextProvider/ContextSearchHome";
import {getMoneyFormat} from "@app/utils/convert/ConvertHelper";
import {concat} from "lodash";
import {getMessaging, getToken, onMessage} from "firebase/messaging";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuy-Rh6czNs1Jm4LGfFUAdHvB-AIncyng",
  authDomain: "storage-4255a.firebaseapp.com",
  projectId: "storage-4255a",
  storageBucket: "storage-4255a.appspot.com",
  messagingSenderId: "76967828674",
  appId: "1:76967828674:web:8949168713af2353262f5b",
  measurementId: "G-C4CVCPRJQ8",
};
export function ManagerPermission(): JSX.Element {
  const router = useRouter();
  const category = useSelector((state: any) => state.category);
  const [listBookInitial, setListBookInitial] = useState<any>([]);
  const [listBook, setListBook] = useState<any>([]);
  const [pageSize, setPageSize] = useState(20);
  const [pageCurent, setPageCurent] = useState(1);
  const [path, setPath] = useState<string[]>(["Trang chủ", "Tất cả sách"]);
  const {searchHomeListBook} = useContext(ContextSearchHome);
  const [paramSubmit, setParamSubmit] = useState({
    sortBy: "null",
    filter: "null",
    keyWord: "null",
  });
  const [totalItemBook, setTotalItemBook] = useState(0);
  const listDataCity = [
    {
      value: "null",
      label: "Tất cả",
    },
  ];
  const messaging = getMessaging(initializeApp(firebaseConfig));

  const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });

  useEffect(() => {
    getToken(messaging, {
      vapidKey:
        "BIYxNzI3XKaLdK5VLm9H65f2_bnUoqGKluFT8efWn7tN4XYunCAgUexKAdWx0wKhVQ7LD4Zm-DLF8RNK0K4Alh8",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("current token for client: ", currentToken);
          localStorage.setItem("FCMToken", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }, []);

  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => console.log("failed: ", err));
  }, []);

  const toDetailBook = (item: any): void => {
    router.push({
      pathname: "/detail_book",
      query: {
        key: item.form,
        postId: item.id,
        bookId: item.bookList[0].bookId,
        userId: item.userId,
      },
    });
  };

  const handleChangePage = (page: number, pageSizeNew: number) => {
    if (page !== pageCurent || pageSizeNew !== pageSize) {
      setPageSize(pageSizeNew);
      setPageCurent(page);
      setListBook(
        listBookInitial.slice((page - 1) * pageSizeNew, page * pageSizeNew)
      );
    }
  };
  const handleReset = (): void => {
    setParamSubmit({
      keyWord: "null",
      sortBy: "null",
      filter: "null",
    });
    setListBook([]);
    ApiBook.getAllPost(paramSubmit).then((res: any) => {
      setListBook(res?.slice(0, pageSize));
      setListBookInitial(res);
    });
  };
  const handleGetPath = () => {
    const temp = [""];

    const paths = category.find((e: any) => e.id === router.query.kind);
    if (paths) {
      temp.push(paths.name);
      if (paths?.subcategoryList) {
        temp.push(
          paths.subcategoryList.find((e: any) => e.id === router.query.type)
            ?.name
        );
      }
    }
    setPath(temp);
  };

  const handleSelectSort = (value: string): void => {
    setParamSubmit({...paramSubmit, sortBy: value});
  };
  const handleSelectCity = (value: any): void => {
    setParamSubmit({...paramSubmit, filter: value});
  };

  const listSelectOption = [
    {
      title: "Sắp xếp theo",
      placeholder: "Giá",
      width: 120,
      value: paramSubmit.sortBy === "null" ? "" : paramSubmit.sortBy,
      handleChange: handleSelectSort,
      optionSelect: [
        {
          value: "Tăng dần",
          label: "Tăng dần",
        },
        {
          value: "Giảm dần",
          label: "Giảm dần",
        },
      ],
    },
    {
      title: "Thành phố",
      placeholder: "Chọn thành phố",
      width: 120,
      value: paramSubmit.filter === "null" ? "" : paramSubmit.filter,
      handleChange: handleSelectCity,
      optionSelect: listDataCity ?? [],
    },
  ];
  const getDataListAllCity = (): Promise<any> => ApiBook.getAllCity();
  const getDataCity = useQuery("GET_DATA_CITY", getDataListAllCity);
  if (getDataCity?.data) {
    getDataCity.data.map((item: any) =>
      listDataCity.push({
        value: item,
        label: item,
      })
    );
  }

  useEffect(() => {
    if (router.query.search) {
      ApiBook.searchPost(router.query.search as string).then((res: any) => {
        setListBook(res?.slice(0, pageSize));
        setListBookInitial(res);
        setPath(["Trang chủ", "Tìm kiếm"]);
      });
    } else if (router.query.kind) {
      ApiBook.getKindBook({
        subcategoryId: router.query.type,
        sortBy: "null",
        filter: "null",
      }).then((res: any) => {
        setListBookInitial(res);
        setListBook(res?.slice(0, pageSize));
        handleGetPath();
        setPath(concat(["Trang chủ", "Tất cả sách"], category));
      });
    } else {
      if (window.history.state.as === "/") {
        ApiBook.getAllPost({
          keyWord: searchHomeListBook,
          sortBy: paramSubmit.sortBy,
          filter: paramSubmit.filter,
        }).then((res: any) => {
          setListBook(res?.slice(0, pageSize));
          setListBookInitial(res);
          setTotalItemBook(res.length);
        });
        setPath(["Trang chủ", "Tất cả sách"]);
      }
    }
  }, [router.query, paramSubmit, searchHomeListBook]);

  return (
    // <ContextSearchHome.Provider value={{setParamSubmit, paramSubmit}}>
    <div className="home-container">
      <BreakCrumGlobal listBreakcrum={path} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FilterGroupGlobal
            // listSearchText={listSearchText}
            listSelectOption={listSelectOption}
          />
          <Button onClick={handleReset}>Đặt lại</Button>
        </div>
        <span style={{marginLeft: 5}}>Kết quả: {totalItemBook}</span>
      </div>
      <div className="home-list-book">
        {listBook.isLoading ? (
          <LoadingGlobal />
        ) : (
          listBook.map((item: any, index: number) => (
            <div className="item-book" key={index}>
              <Image
                preview={false}
                width={160}
                height={160}
                src={item.imageUrl}
              />
              <div className="text-title">{item.title}</div>
              <div className="row-end">
                <div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    {/* <DollarCircleOutlined /> */}
                    <div className="text-align-center">
                      {item.price
                        ? `${getMoneyFormat(item.price)} VNĐ`
                        : "Chưa có giá"}
                    </div>
                  </div>
                  <div>
                    <Icon icon="location" size={18} />
                    <span style={{fontSize: "12px"}}>{item.location}</span>
                  </div>
                </div>
                <div>
                  <Button
                    style={{
                      borderColor: item.form === "Bán" ? "red" : "blue",
                      color: item.form === "Bán" ? "red" : "blue",
                    }}
                    onClick={() => toDetailBook(item)}
                  >
                    {item.form.toLowerCase() === "bán" ? "Bán" : "Trao đổi"}
                  </Button>
                </div>
              </div>
              <div className="author">
                <span>Người đăng:</span>
                {item.userName}
              </div>
            </div>
          ))
        )}
      </div>
      {listBookInitial.length > 0 && (
        <div className="pagination-home">
          <Pagination
            responsive
            current={pageCurent}
            total={listBookInitial.length}
            pageSize={pageSize}
            onChange={(page, PageSizes) => {
              handleChangePage(page, PageSizes);
            }}
          />
        </div>
      )}
    </div>
    // </ContextSearchHome.Provider>
  );
}
