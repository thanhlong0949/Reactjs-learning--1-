import React from "react";
import "./index.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Image} from "antd";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import {Autoplay, Navigation, Pagination} from "swiper";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";

interface ICarouselComponent {
  title: string;
  isViewAll?: boolean;
  handleViewAll?: () => void;
  listItem: {
    title?: string;
    userImage?: string;
    userName?: string;
    count?: number;
    subName?: string;
    subcateImage?: string;
    location?: string;
    imageUrl?: string;
  }[];
}
export function CaroselComponents(props: ICarouselComponent): JSX.Element {
  const {listItem, title, isViewAll, handleViewAll} = props;
  const router = useRouter();

  const goToDetailBook = (item: any): void => {
    router.push({
      pathname: "/detail_book",
      query: {key: item.form, postId: item.id, bookId: item.bookList[0].bookId},
    });
  };
  const goToTopCategory = (): void => {
    console.log("goToTopCategory");
  };
  const goToTopUser = (): void => {
    console.log("goToTopUser");
  };

  const handleGoToPage = (item: any): void => {
    switch (title) {
      case "Thể lại phổ biến":
        goToTopCategory();
        break;
      case "Top người dùng":
        goToTopUser();
        break;
      case "Top bài đăng":
        goToDetailBook(item);
        break;
    }
  };

  const renderItem = (text: string, item: any) => {
    switch (text) {
      case "Top người dùng":
        return (
          <div className="item-slide">
            <Image preview={false} src={item.userImage} height={160} />
            <div className="text-title-category">{item.userName}</div>
            <div className="buy">{item.count} lượt mua</div>
          </div>
        );
      case "Thể lại phổ biến":
        return (
          <div className="item-slide">
            <Image preview={false} src={item.subcateImage} height={160} />
            <div className="text-title-category">{item.subName}</div>
            <div className="buy">Số lượng {item.amount}</div>
          </div>
        );
      case "Top bài đăng":
        return (
          <div className="item-slide">
            <Image preview={false} src={item.imageUrl} height={160} />
            <div className="text-title-category">{item.title}</div>
            <div className="buy">Vị trí: {item.location}</div>
          </div>
        );
    }
  };

  return (
    <div className="carousel-component">
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h3>{title}</h3>
        {isViewAll && (
          <div style={{cursor: "pointer"}} onClick={handleViewAll}>
            <span>Xem tất cả</span>
            <Icon icon="ArrowRight_2" size={17} />
          </div>
        )}
      </div>
      <div className="list-slider">
        <div className="slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {listItem.map((item, index) => (
              <SwiperSlide
                onClick={() => handleGoToPage(item)}
                className="swiper-slide"
                key={`hihi${index}`}
              >
                {renderItem(title, item)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
