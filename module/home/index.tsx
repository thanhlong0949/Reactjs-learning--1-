import React, {useEffect, useState} from "react";
import "./index.scss";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import Navbar from "@app/components/Layout/Navbar/Navbar";
import {useRouter} from "next/router";
import {CaroselComponents} from "@app/module/home/Components/CarouselComponent";
import ApiUser from "@app/api/ApiUser";

export function Home(): JSX.Element {
  const router = useRouter();
  const [userTop, setUserTop] = useState<any>([]);
  const [popularGenre, setPopularGenre] = useState([]);
  const [topPost, setTopPost] = useState([]);

  useEffect(() => {
    ApiUser.getTopUser().then((res) => {
      setUserTop(res);
    });
    ApiUser.getPopularGenre().then((res) => {
      setPopularGenre(res);
    });
    ApiUser.getTopPosts().then((res) => {
      setTopPost(res);
    });
  }, []);

  const handleViewAll = (): void => {
    router.push("/");
  };

  return (
    <div className="home-page-container">
      <Navbar />
      <div className="introduce">
        <div className="background-image-home" />
        <div className="text-introduce-detail">
          <div>
            <h2 className="text-introduce">
              {" "}
              "Một cuốn sách hay thực sự hay dạy tôi nhiều điều hơn là đọc nó,
              Tôi phải nhanh chóng đặt nó xuống, bắt đầu sống theo những điều nó
              chỉ dẫn. Điều tôi bắt đầu bằng cách đọc, tôi phải kết thúc bằng
              hành động"
            </h2>
            <div
              style={{
                color: "white",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <em>-- Henry David Thoreau --</em>
            </div>
          </div>
        </div>
      </div>
      <CaroselComponents
        isViewAll
        handleViewAll={handleViewAll}
        title="Top bài đăng"
        listItem={topPost.slice(1, 11)}
      />
      <CaroselComponents title="Thể lại phổ biến" listItem={popularGenre} />
      <CaroselComponents title="Top người dùng" listItem={userTop} />

      <div className="row3">
        <div className="title">
          <h2>CHỢ SÁCH CŨ</h2>
        </div>
        <div className="desciption">
          <p>
            “Đằng sau sự thành công công của một người đàn ông, là hình dáng của
            một người phụ nữ. Còn đằng sau sự thành công của bất kì ai là ít
            nhất một cuốn sách, hay cả một giá sách..”
          </p>
          <p>
            “Vào khoảnh khắc mà chúng ta quyết thuyết phục đứa trẻ, bất cứ đứa
            trẻ nào, bước qua bậc thềm ấy, bậc thềm màu nhiệm dẫn vào thư viện,
            ta thay đổi cuộc sống của nó mãi mãi, theo cách tốt đẹp hơn.” -
            Barack Obama
          </p>
          <p>
            “Vào khoảnh khắc mà chúng ta quyết thuyết phục đứa trẻ, bất cứ đứa
            trẻ nào, bước qua bậc thềm ấy, bậc thềm màu nhiệm dẫn vào thư viện,
            ta thay đổi cuộc sống của nó mãi mãi, theo cách tốt đẹp hơn.” -
            Barack Obama
          </p>
          <p>
            "Cuốn sách tốt nhất cho bạn là cuốn sách nói nhiều nhất với bạn vào
            lúc bạn đọc nó. Tôi không nói tới cuốn sách cho bạn nhiều bài học
            nhất mà là cuốn sách nuôi dưỡng tâm hồn bạn. Và điều đó phụ thuộc
            vào tuổi tác, trải nghiệm, nhu cầu về tâm lý và tinh thần.” -
            Robertson Davies
          </p>
        </div>
      </div>
    </div>
  );
}
