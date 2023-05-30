import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useGetAllPostsQuery } from "../../../redux/posts";
import { HTag } from "../../common/HTag";
import { PTag } from "../../common/PTag";
import { Comments } from "../../common/Comments";
import { Container } from "../../common/Container";
import { useEffect, useState } from "react";
import styles from "./Blog.module.css";

export const Blog = () => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia("(min-width: 767px)").matches
  );

  const [postId, setPostId] = useState<number>(1);
  const { data: posts = [], isError, isFetching } = useGetAllPostsQuery();

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", e => setMatches(e.matches));
  });

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
    <Container>
      <Swiper
        spaceBetween={30}
        pagination={pagination}
        navigation={matches}
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
                  <hr className={styles.divider} />
                  <PTag size="s" texttransform="Capitalize">
                    {p.body}
                  </PTag>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        {isError && <div>Something went wrong</div>}
        {isFetching && <div>Loading...</div>}
      </Swiper>
      <Comments postId={postId} />
    </Container>
  );
};
