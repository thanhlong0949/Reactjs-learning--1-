import React, {Dispatch, Key, SetStateAction, useEffect, useState} from "react";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {Input, Modal, Upload} from "antd";
import "./index.scss";
import {upLoadImage} from "@app/utils/firebase/uploadImage";
import ModalEditPost from "@app/module/user_profile/Components/ListTab/HistoryPost/Components/ModalEdit/ModalEditPost";
import {useMutation} from "react-query";
import ApiBook from "@app/api/ApiBook";
import {notificationError, notificationSuccess} from "@app/utils/notification";

type IProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  data?: any;
  idItem?: Key;
};
export function ModalEdit({
  isModalOpen,
  setIsModalOpen,
  data,
  idItem,
}: IProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [intPrice, setIntPrice] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [bookExchange, setBookExchange] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [dataItem, setDataItem] = useState<any>();
  const [modalEditPost, setModalEditPost] = useState(false);
  const [idItemChild, setIdItemChild] = useState();
  const [dataChild, setDataChild] = useState<any>();

  const UpdatePost = useMutation(ApiBook.updatePost);

  useEffect(() => {
    if (data) {
      setDataItem(
        data.filter((item: any) => {
          return item?.id === idItem;
        })
      );
    }
  }, [idItem, isModalOpen]);
  console.log(dataItem?.[0], "hdhdhdh");

  useEffect(() => {
    if (dataItem) {
      // eslint-disable-next-line array-callback-return
      dataItem.map((item: any) => {
        setName(item?.title);
        setImageUrl(item?.imageUrl);
        setLocation(item?.location);
        setPrice(item?.price);
        setIntPrice(item?.initPrice);
        setBookExchange(item?.bookExchange);
      });
    }
  }, [dataItem, isModalOpen]);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Tải ảnh lên</div>
    </div>
  );

  const handleChangeUploadImage = async (file: any) => {
    const link = await upLoadImage(file.file);
    setImageUrl(link);
  };
  const handleCloseModal = () => {
    if (dataItem) {
      // eslint-disable-next-line array-callback-return
      dataItem.map((item: any) => {
        setName(item?.title);
        setImageUrl(item?.imageUrl);
        setLocation(item?.location);
        setPrice(item?.price);
        setIntPrice(item?.initPrice);
        setBookExchange(item?.bookExchange);
      });
    }
    setIsModalOpen(false);
  };
  const handleLogin = (): void => {
    const param = {
      id: dataItem?.[0]?.id,
      title: name,
      imageUrl: imageUrl ?? dataItem?.[0]?.imageUrl,
      initPrice: intPrice ?? dataItem?.[0]?.initPrice,
      price: price ?? dataItem?.[0]?.price,
      location: location ?? dataItem?.[0]?.location,
      bookExchange: bookExchange ?? dataItem?.[0]?.bookExchange,
    };
    UpdatePost.mutate(param, {
      onSuccess: () => {
        notificationSuccess("Cập nhật thành công");
        setIsModalOpen(false);
      },
      onError: () => {
        notificationError("Có lỗi xảy ra vui lòng thử lại sau!");
        setIsModalOpen(false);
      },
    });
  };
  return (
    <Modal
      visible={isModalOpen}
      onCancel={handleCloseModal}
      onOk={handleLogin}
      style={{padding: 20}}
      title="Chỉnh sửa thông tin bài đăng"
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{fontWeight: 500, width: 100}}>Tên</div>
          <Input
            defaultValue={dataItem?.[0]?.title}
            placeholder="Nhập tiêu đề"
            name="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {dataItem?.[0]?.form !== "Trao Đổi" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: "1vh",
            }}
          >
            <div style={{fontWeight: 500, width: 100}}>Gía</div>
            <Input
              type="number"
              defaultValue={dataItem?.[0]?.price}
              placeholder="Nhập tiêu đề"
              name="title"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        ) : null}
        {dataItem?.[0]?.form === "Trao Đổi" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: "1vh",
            }}
          >
            <div style={{fontWeight: 500, width: 100}}>Sách trao đổi</div>
            <Input
              placeholder="Nhập tiêu đề"
              name="title"
              value={bookExchange}
              onChange={(e) => setBookExchange(e.target.value)}
            />
          </div>
        ) : null}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{fontWeight: 500, width: 100}}>Gía bìa</div>
          <Input
            type="number"
            defaultValue={dataItem?.[0]?.initPrice}
            placeholder="Nhập tiêu đề"
            name="title"
            value={intPrice}
            onChange={(e) => setIntPrice(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "5vh",
          }}
        >
          <div style={{fontWeight: 500, width: 100}}>Vị trí</div>
          <Input
            defaultValue={dataItem?.[0]?.location}
            placeholder="Nhập tiêu đề"
            name="title"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div style={{display: "flex", marginBottom: 20, marginTop: 20}}>
          <div className="title-text" style={{marginRight: 20}}>
            <span style={{fontWeight: 500}}>Tải ảnh lên</span>
            <span className="require">*</span>
          </div>
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
        </div>
        <h4>Những cuốn sách trong bài đăng:</h4>
        <div>
          {dataItem &&
            // eslint-disable-next-line array-callback-return
            dataItem?.map((item: any, index: any) => {
              return (
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  {item?.bookList?.map((it: any, index: any) => (
                    <div
                      key={`${it?.name}${index}`}
                      onClick={() => {
                        setModalEditPost(true);
                        setIdItemChild(item?.id);
                        setDataChild(it);
                      }}
                    >
                      <img
                        src={it?.imageBook?.[0]?.url}
                        alt="avatar"
                        style={{width: "20%"}}
                      />
                      <div>{it?.name}</div>
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
        <ModalEditPost
          data={dataChild}
          idItem={idItemChild}
          isModalOpen={modalEditPost}
          setIsModalOpen={setModalEditPost}
          setClose={setIsModalOpen}
        />
      </div>
    </Modal>
  );
}
