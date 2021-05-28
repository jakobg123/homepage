import styles from "./Carousel.module.scss";
import {useRef, useEffect, useState} from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from "../../utils/Hooks/useWindowSize";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ICarouselProps {

}

const Carousel: React.FC<ICarouselProps> = () => {
    // const [numberOfCards, setNumberOfCards] = useState(1);
    // const [width, height] = useWindowSize();
    // console.log("🚀 ~ file: Carousel.tsx ~ line 16 ~ width", width)


    // const ref = useRef();
    // console.log("🚀 ~ file: Carousel.tsx ~ line 14 ~ ref", ref)
    // console.log("🚀 ~ file: Carousel.tsx ~ line 14 ~ refWIDTh", ref.current.offsetWidth);

    // useEffect(() => {
    //     console.log("effecten körs");
    //     if (!width){
    //         return;
    //     }
    //     width >= 768 ? setNumberOfCards(3) : setNumberOfCards(1);
    // }, [width])

    return (
    <div className={styles["Carousel"]}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
        //   slidesPerView={numberOfCards}
          navigation
          pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          breakpoints={
              {768: {
                  slidesPerView: 3
              }}
          }
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {/* <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide> */}
          <SwiperSlide>{<InfoCard num={1} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={2} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={3} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={4} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={5} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={6} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={7} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={8} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={9} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={10} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={11} />}</SwiperSlide>
          <SwiperSlide>{<InfoCard num={12} />}</SwiperSlide>
        </Swiper>
    </div>
  );
};

const InfoCard = ({num}) => {
    return (
        <div className={styles["InfoCard"]}>{num}</div>
    )
}

export default Carousel;
