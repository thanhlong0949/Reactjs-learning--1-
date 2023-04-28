import React, {useEffect, useState} from "react";
import "../../index.scss";
import {
  Button,
  Input,
  Radio,
  Upload,
  Form,
  DatePicker,
  AutoComplete,
} from "antd";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import moment from "moment";
import {upLoadImage} from "@app/utils/firebase/uploadImage";
import {uuidv4} from "@firebase/util";
import ApiPost from "@app/api/ApiPost";

interface ISelfSetBook {
  handleReset: () => void;
  setListBook: any;
  setKeyPage: any;
}

export default function SelfOneBook(props: ISelfSetBook): JSX.Element {
  const {handleReset, setListBook, setKeyPage} = props;
  const [loading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [searchOption, setSearchOption] = useState<string>();
  const [dataTest, setDataTest] = useState<any>();

  const handleCancel = (): void => {
    handleReset();
  };
  const handleSubmit = (data: any): void => {
    setListBook((prev: any) => [
      ...prev,
      {
        ...data,
        author: [data.author],
        key: uuidv4(),
        bookImages: [imageUrl],
        publicationDate: moment(data.publicationDate).format("YYYY-MM-DD"),
      },
    ]);
    setKeyPage("view");
  };

  const handleChangeUploadImage = async (file: any) => {
    const link = await upLoadImage(file.file);
    setImageUrl(link);
  };
  useEffect(() => {
    if (searchOption) {
      ApiPost.getAuthorByKeyWord({keyWord: searchOption}).then((res: any) => {
        const a = res
          ? res.map((item: any) => {
              return {value: item.author};
            })
          : null;
        setDataTest(a);
      });
    }
  }, [searchOption]);
  console.log(dataTest);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Tải ảnh lên</div>
    </div>
  );
  // @ts-ignore
  return (
    <div>
      <div
        style={{marginBottom: 20, display: "flex", justifyContent: "flex-end"}}
      >
        <Button
          onClick={handleReset}
          style={{
            marginRight: "5px",
          }}
          type="primary"
        >
          Quay lại
        </Button>
      </div>
      <Form
        name="basic"
        labelAlign="left"
        labelCol={{span: 7}}
        wrapperCol={{span: 17}}
        initialValues={{}}
        onFinish={(val) => {
          handleSubmit(val);
        }}
        autoComplete="off"
        colon={false}
        id="form-book"
      >
        <Form.Item label="ISBN" name="isbn">
          <Input placeholder="Nhập ISBN" />
        </Form.Item>
        <Form.Item
          label="Tên sách"
          required
          name="name"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Input placeholder="Nhập tên sách" />
        </Form.Item>
        <Form.Item
          label="Loại bìa"
          required
          name="coverType"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Input placeholder="Nhập loại bìa" />
        </Form.Item>
        <Form.Item
          label="Tái bản lần"
          required
          name="reprints"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Input placeholder="Nhập lần tái bản" />
        </Form.Item>
        <Form.Item
          label="Tác giả"
          required
          name="author"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <AutoComplete
            style={{
              width: "100%",
            }}
            onSearch={(e) => {
              setSearchOption(e);
            }}
            options={dataTest}
            placeholder="Vui lòng chọn tác giả"
            filterOption={(inputValue: string, option: any | undefined) =>
              option &&
              option.value &&
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
            }
          />
        </Form.Item>
        <Form.Item
          label="Ngôn ngữ"
          required
          name="language"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Input placeholder="Nhập ngôn ngữ" />
        </Form.Item>
        <Form.Item
          label="Nhà xuất bản"
          required
          name="publicCompany"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Input placeholder="Nhập nhà xuất bản" />
        </Form.Item>
        <Form.Item
          label="Ngày xuất bản"
          required
          name="publicationDate"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <DatePicker
            placeholder="Chọn ngày xuất bản"
            style={{width: "100%"}}
            format={["DD-MM-YYYY"]}
          />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          required
          name="description"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Input placeholder="Nhập mô tả" />
        </Form.Item>
        <Form.Item
          label="Tình trạng sách"
          required
          name="statusQuo"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
          initialValue="Còn mới"
        >
          <Radio.Group name="statusQuo">
            <Radio value="Còn mới">Còn mới</Radio>
            <Radio value="Đã qua sử dụng">Đã qua sử dụng</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Hình ảnh"
          required
          name="bookImages"
          rules={[{required: true, message: "Vui lòng nhập trường này"}]}
        >
          <Upload
            name="url"
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
      </Form>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button onClick={handleCancel} style={{marginRight: "5px"}}>
          Hủy
        </Button>
        <Button
          style={{marginRight: "5px"}}
          type="primary"
          htmlType="submit"
          form="form-book"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
