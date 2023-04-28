import {DatePicker, Input, Modal, Upload} from "antd";
import React, {Dispatch, Key, SetStateAction, useEffect, useState} from "react";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {upLoadImage} from "@app/utils/firebase/uploadImage";
// eslint-disable-next-line no-duplicate-imports
import type {DatePickerProps} from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";
import {notificationError, notificationSuccess} from "@app/utils/notification";
import {useMutation} from "react-query";
import ApiBook from "@app/api/ApiBook";

type IProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  data?: any;
  idItem?: Key;
  setClose: Dispatch<SetStateAction<boolean>>;
};
function ModalEditPost({
  isModalOpen,
  setIsModalOpen,
  data,
  idItem,
  setClose,
}: IProps) {
  const [imageUrl, setImageUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [isbn, setIsbn] = useState("");
  const [reprint, setReprint] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [publicationCompany, setPublicationCompany] = useState("");
  const [coverType, setCoverType] = useState("");
  const [language, setLanguage] = useState("");
  const [author, setAuthor] = useState("");
  const [statusQuo, setStatusQuo] = useState("");
  const UpdateBook = useMutation(ApiBook.updateBook);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setIsbn(data.isbn);
      setReprint(data.reprints);
      setPublicationCompany(data.publicCompany);
      setPublicationDate(data.publicationDate);
      setAuthor(data.author);
      setCoverType(data.coverType);
      setLanguage(data.language);
      setStatusQuo(data.statusQuo);
      setImageUrl(data.imageBook?.[0]?.url);
    }
  }, [data, isModalOpen]);

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

  const handleLogin = () => {
    const param = {
      bookId: data?.bookId,
      name: name ?? data.name,
      isbn: isbn ?? data.isbn,
      reprint: reprint ?? data.reprint,
      publicationDate: publicationDate ?? data.publicationDate,
      publicationCompany: publicationCompany ?? data.publicationCompany,
      coverType: coverType ?? data.coverType,
      language: language ?? data.language,
      StatusQuo: statusQuo ?? data.StatusQuo,
      author: author ?? data.author,
      bookImages: [
        {
          id: idItem,
          url: imageUrl ?? data?.imageUrl,
        },
      ],
    };
    UpdateBook.mutate(param, {
      onSuccess: () => {
        notificationSuccess("Cập nhật thành công");
        setIsModalOpen(false);
        setClose(false);
      },
      onError: () => {
        notificationError("Có lỗi xảy ra vui lòng thử lại sau!");
        setIsModalOpen(false);
      },
    });
  };
  const handleCloseModal = () => {
    if (data) {
      setName(data.name);
      setIsbn(data.isbn);
      setReprint(data.reprints);
      setPublicationCompany(data.publicCompany);
      setPublicationDate(data.publicationDate);
      setAuthor(data.author);
      setCoverType(data.coverType);
      setLanguage(data.language);
      setStatusQuo(data.statusQuo);
      setImageUrl(data.imageBook?.[0]?.url);
    }
    setIsModalOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setPublicationDate(dateString);
  };

  return (
    <Modal
      visible={isModalOpen}
      onCancel={handleCloseModal}
      onOk={handleLogin}
      style={{padding: 20}}
      title="Chỉnh sửa thông tin sách"
      width={800}
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
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Tên
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Mã isbn
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Lần tái bản
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={reprint}
            onChange={(e) => setReprint(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Ngày xuất bản
          </div>
          <DatePicker
            onChange={onChange}
            value={moment(publicationDate)}
            style={{width: "100%"}}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Nhà xuất bản
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={publicationCompany}
            onChange={(e) => setPublicationCompany(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Loại bìa
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={coverType}
            onChange={(e) => setCoverType(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Ngôn ngữ
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "1vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Trạng thái sách
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={statusQuo}
            onChange={(e) => setStatusQuo(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: "3vh",
          }}
        >
          <div style={{marginRight: "2vw", fontWeight: 500, width: 100}}>
            Tác giả
          </div>
          <Input
            placeholder="Nhập tiêu đề"
            name="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div style={{display: "flex"}}>
          <div className="title-text" style={{marginRight: 20, width: 100}}>
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
      </div>
    </Modal>
  );
}
export default ModalEditPost;
