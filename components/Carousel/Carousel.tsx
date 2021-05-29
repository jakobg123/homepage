import styles from "./Carousel.module.scss";
import { useRef, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from "../../utils/Hooks/useWindowSize";
import CardCarousel from "../CardCarousel";
import Modal from "../Modal";
import Image from "../Image";
import {lockBody, unlockBody} from "../../utils/helpers/modal";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ICarouselProps {

}

const Carousel: React.FC<ICarouselProps> = () => {
    const [openModal, setOpenModal] = useState(false)
    // console.log("🚀 ~ file: Carousel.tsx ~ line 19 ~ openModal", openModal)

    // const open = () => {
    //     setOpenModal(true)
    // };

    // const close = () => {
    //     setOpenModal(false)
    // };
    // useEffect(() => {
    //     effect
    //     return () => setOpenModal(false)
    // }, [open])

  const handleClick = (open, setOpen) => {
  console.log("🚀 ~ file: Carousel.tsx ~ line 34 ~ handleClick ~ open", open)

      open ? unlockBody() : lockBody();
      setOpen(!open);
  }

  const image = {
    src: '/images/temp/kanban2_small-min.jpg',
    alt: 'Anlagstavla med todo-lappar.',
    caption: 'Foto: Paul Hanaoka, unsplash.com',
    width: 640,
    height: 960,
    mediaQueries: [
      {
        minWidth: 580,
        src: '/images/temp/kanban2_medium-min.jpg',
      },
    ],
  };
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
    <>
    <div className={styles["Carousel"]}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        //   slidesPerView={numberOfCards}
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        breakpoints={
          {
            768: {
              slidesPerView: 3
            }
          }
        }
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><CardCarousel image={image} handleClick={handleClick} open={openModal} setOpen={setOpenModal}/></SwiperSlide>
        <SwiperSlide><CardCarousel image={image} handleClick={handleClick} open={openModal} setOpen={setOpenModal}/></SwiperSlide>
        <SwiperSlide><CardCarousel image={image} handleClick={handleClick} open={openModal} setOpen={setOpenModal}/></SwiperSlide>
        <SwiperSlide><CardCarousel image={image} handleClick={handleClick} open={openModal} setOpen={setOpenModal}/></SwiperSlide>
        <SwiperSlide><CardCarousel image={image} handleClick={handleClick} open={openModal} setOpen={setOpenModal}/></SwiperSlide>

        {/* <SwiperSlide>{<InfoCard num={1} />}</SwiperSlide>
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
        <SwiperSlide>{<InfoCard num={12} />}</SwiperSlide> */}
      </Swiper>
    </div>
    <Modal handleClick={handleClick} open={openModal} setOpen={setOpenModal} >
     <Image {...image} />
    </Modal>
    </>
  );
};

const InfoCard = ({ num }) => {
  return (
    <div className={styles["InfoCard"]}>{num}</div>
  )
}

export default Carousel;
