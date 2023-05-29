import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetAllPostsQuery } from "../../../redux/posts";
import { HTag } from "../../common/HTag";
import { PTag } from "../../common/PTag";
import { Comments } from "../../common/Comments";
import { useState } from "react";
import styles from "./Blog.module.css";

export const Blog = () => {
  const [postId, setPostId] = useState<number>(1);
  const { data: posts = [], isError, isFetching } = useGetAllPostsQuery();

  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return `<span class=${className}>
       ${index + 1}
       </span>`;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      navigation={true}
      keyboard={true}
      modules={[Pagination, Navigation, Keyboard]}
      className="mySwiper"
      onSlideChange={swiper => setPostId(swiper.activeIndex + 1)}
    >
      {posts &&
        posts.map(p => (
          <SwiperSlide key={p.id}>
            <ul>
              <li className={styles.postCard}>
                <HTag tag="h1">{p.title}</HTag>
                <PTag size="m" texttransform="Capitalize">
                  {p.body}
                </PTag>
                <hr />
                <Comments postId={postId} />
              </li>
            </ul>
          </SwiperSlide>
        ))}
      {isError && <div>Something went wrong</div>}
      {isFetching && <div>Loading...</div>}
    </Swiper>
  );
};
