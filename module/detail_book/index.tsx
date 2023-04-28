import React, {useEffect, useState} from "react";
import "./index.scss";
import Navbar from "@app/components/Layout/Navbar/Navbar";
import {Button, Col, Image, Row} from "antd";
import {
  CheckCircleFilled,
  HeartOutlined,
  MoneyCollectOutlined,
  PhoneFilled,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {BreakCrumGlobal} from "@app/components/BreakCrumGlobal";
import ApiBook from "@app/api/ApiBook";
import moment from "moment";
import {getMoneyFormat} from "@app/utils/convert/ConvertHelper";
import {useSelector} from "react-redux";

export function DetailBook(): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [dataCurrent, setDataCurent] = useState<any>();
  const [imageCurent, setImageCurent] = useState<any>();
  const keyPage = router?.query?.key?.toString();
  const user = useSelector((state: any) => state.user);
  const goToPayment = (value: string): void => {
    router.push({
      pathname: "/payment",
      query: {keyPage: keyPage, postId: router.query.postId},
    });
  };

  const handleGetBook = (book: any) => {
    setDataCurent(book);
    setImageCurent(book.bookImages[0]?.url);
  };

  const handleListImage = () => {
    return data.map((el: any, index: number) => (
      <div
        className="item-book"
        onClick={() => {
          handleGetBook(el);
        }}
        key={`${el.boolId}_${index}`}
      >
        <Image
          width={50}
          height={70}
          preview={false}
          src={el.bookImages[0]?.url}
        />
      </div>
    ));
  };

  useEffect(() => {
    if (router.query.postId) {
      ApiBook.getBookDetail(router.query.postId as string).then((res: any) => {
        setData(res);
        setDataCurent(res[0]);
        setImageCurent(res[0]?.bookImages[0]?.url);
      });
    }
  }, [router.query]);

  return (
    <div className="detail-book-container-new">
      <Navbar />
      <div className="self-book">
        <BreakCrumGlobal
          listBreakcrum={
            keyPage?.toLowerCase() === "bán"
              ? ["Trang chủ", "Mua sách"]
              : ["Trang chủ", "Trao đổi sách"]
          }
        />
        <div className="main">
          <div className="image-book">
            <div className="icon">
              <div className="group-icon">
                <ShareAltOutlined style={{fontSize: "25px", width: "45px"}} />
                <HeartOutlined style={{fontSize: "25px"}} />
              </div>
            </div>
            <div className="image">
              <Row>
                <Col className="image-group-book" span={6}>
                  {dataCurrent?.bookImages?.map((item: any) => (
                    <Row style={{padding: "4px 0"}} key={item?.imageId}>
                      <Image
                        width={50}
                        height={70}
                        preview
                        src={item?.url}
                        style={{objectFit: "cover"}}
                      />
                    </Row>
                  ))}
                </Col>
                <Col />
                <Col
                  span={20}
                  flex={1}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    width={200}
                    height={260}
                    preview={false}
                    src={imageCurent}
                    style={{objectFit: "cover"}}
                  />
                  <div className="horizontalLine" />
                  <div className="group-image-preview">{handleListImage()}</div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="detail-book">
            <h2 style={{color: "#333"}}>{dataCurrent?.name}</h2>
            {keyPage?.toLowerCase() === "bán" ? (
              <div className="price">
                <span style={{marginLeft: "5px"}}>
                  {getMoneyFormat(dataCurrent?.price) ?? 0}VND
                </span>
              </div>
            ) : (
              <div>
                {user?.id?.toString() !== router.query.userId && (
                  <Button
                    disabled={user.id === dataCurrent?.userId}
                    onClick={() => goToPayment("Bán")}
                    type="primary"
                    icon={<MoneyCollectOutlined />}
                  >
                    Trao đổi
                  </Button>
                )}

                {/* <Button */}
                {/*  disabled={user.id === dataCurrent?.userId} */}
                {/*  style={{marginLeft: 7}} */}
                {/*  type="primary" */}
                {/*  onClick={() => router.push("/chat-seller")} */}
                {/* > */}
                {/*  Chat với người bán */}
                {/* </Button> */}
              </div>
            )}

            {keyPage?.toLowerCase() === "bán" ? (
              <div className="button-sale">
                {user?.id?.toString() !== router.query.userId && (
                  <Button
                    disabled={user.id === dataCurrent?.userId}
                    type="primary"
                    onClick={() => goToPayment("Mua")}
                    icon={<MoneyCollectOutlined />}
                  >
                    Mua ngay
                  </Button>
                )}

                <Button
                  disabled={user.id === dataCurrent?.userId}
                  style={{marginLeft: 7}}
                  type="primary"
                  onClick={() =>
                    router.push(`/chat-seller?seller=${dataCurrent?.userName}`)
                  }
                >
                  Chat với người bán
                </Button>
              </div>
            ) : (
              <div />
            )}

            <div className="group-text">
              <div className="row-text">
                <div className="title">Ngày xuất bản</div>
                <div className="detail">
                  {moment(dataCurrent?.publicationDate).format("DD/MM/YYYY")}
                </div>
              </div>
              <div className="row-text">
                <div className="title">Loại bìa</div>
                <div className="detail">{dataCurrent?.coverType}</div>
              </div>
              <div className="row-text">
                <div className="title">Tình trạng</div>
                <div className="detail">{dataCurrent?.statusQuo}</div>
              </div>
              <div className="row-text">
                <div className="title">Thể loại</div>
                <div className="detail">{dataCurrent?.subcategoryName}</div>
              </div>
              <div className="row-text">
                <div className="title">Tác giả</div>
                <div className="detail">{dataCurrent?.author}</div>
              </div>
              <div className="row-text">
                <div className="title">Ngôn ngữ</div>
                <div className="detail">{dataCurrent?.language}</div>
              </div>
              {keyPage?.toLowerCase() === "bán" ? (
                <div>
                  <div className="row-text">
                    <div className="title">Lần tái bản</div>
                    <div className="detail">{dataCurrent?.reprint}</div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="row-text">
                    <div className="title">Tên sách</div>
                    <div className="detail">
                      <div className="detail">{dataCurrent?.bookExchange}</div>
                    </div>
                  </div>
                </div>
              )}
              <div className="row-text">
                <div className="title">Mô tả</div>
                <div className="detail">{dataCurrent?.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="left">
            <h3>Liên hệ</h3>
            <div className="row1">
              <div className="icon">
                <UserOutlined style={{fontSize: 20}} />
              </div>
              <div className="detail-icon">
                <h4>{dataCurrent?.userName}</h4>
                <CheckCircleFilled
                  style={{marginRight: 4, marginLeft: 4, color: "#26a541"}}
                />
                <h5>Xác thực</h5>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneFilled style={{fontSize: 20}} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "46px",
                }}
              >
                <h3>Số điện thoại:</h3>
                <h4 style={{marginLeft: "4px"}}>{dataCurrent?.phoneNumber}</h4>
              </div>
            </div>
          </div>
          <div className="right">
            <Button
              disabled={user.id === dataCurrent?.userId}
              style={{marginLeft: 7}}
              type="primary"
              onClick={() =>
                router.push(`/chat-seller?seller=${dataCurrent?.userName}`)
              }
            >
              Chat với người bán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
