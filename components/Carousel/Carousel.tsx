import styles from "./Carousel.module.scss";
import { useRef, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from "../../utils/Hooks/useWindowSize";
import CardCarousel from "../CardCarousel";
import Modal from "../Modal";
import Image from "../Image";
import ModalContent from "../ModalContent";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ICarouselProps {
  carouselData: any[];
  dark?: boolean;
}

const Carousel: React.FC<ICarouselProps> = ({ carouselData, dark = false }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onClick = (id, open, setOpen, setModalContent) => {
    setModalContent(id);
    setOpen(!open);
  }

  // const carouselData = [
  //   {
  //     id: 1,
  //     title: "title 1",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum, alias inventore modi officia numquam suscipit, adipisci voluptatibus, consectetur est temporibus id dignissimos quod.",
  //     image: {
  //       src: '/images/temp/kanban2_small-min.jpg',
  //       alt: 'Anlagstavla med todo-lappar.',
  //       caption: 'Foto: Paul Hanaoka, unsplash.com',
  //       width: 640,
  //       height: 960,
  //       mediaQueries: [
  //         {
  //           minWidth: 580,
  //           src: '/images/temp/kanban2_medium-min.jpg',
  //         },
  //       ],
  //     }
  //   },
  //   {
  //     id: 2,
  //     title: "title 2",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum, alias inventore modi officia numquam suscipit, adipisci voluptatibus, consectetur est temporibus id dignissimos quod.",
  //     image: {
  //       src: '/images/temp/code_small-min.jpg',
  //       alt: 'Laptop med programmeringskod.',
  //       caption: 'Foto: James Harrison, unsplash.com',
  //       width: 1920,
  //       height: 1080,
  //       mediaQueries: [
  //         {
  //           minWidth: 768,
  //           src: '/images/temp/code_large-min.jpg',
  //         },
  //         {
  //           minWidth: 580,
  //           src: '/images/temp/code_medium-min.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "title 3",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum, alias inventore modi officia numquam suscipit, adipisci voluptatibus, consectetur est temporibus id dignissimos quod.",
  //     image: {
  //       src: '/images/temp/kanban2_small-min.jpg',
  //       alt: 'Anlagstavla med todo-lappar.',
  //       caption: 'Foto: Paul Hanaoka, unsplash.com',
  //       width: 640,
  //       height: 960,
  //       mediaQueries: [
  //         {
  //           minWidth: 580,
  //           src: '/images/temp/kanban2_medium-min.jpg',
  //         },
  //       ],
  //     }
  //   },
  //   {
  //     id: 4,
  //     title: "title 3",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum, alias inventore modi officia numquam suscipit, adipisci voluptatibus, consectetur est temporibus id dignissimos quod.",
  //     image: {
  //       src: '/images/temp/code_small-min.jpg',
  //       alt: 'Laptop med programmeringskod.',
  //       caption: 'Foto: James Harrison, unsplash.com',
  //       width: 1920,
  //       height: 1080,
  //       mediaQueries: [
  //         {
  //           minWidth: 768,
  //           src: '/images/temp/code_large-min.jpg',
  //         },
  //         {
  //           minWidth: 580,
  //           src: '/images/temp/code_medium-min.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: "title 5",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum, alias inventore modi officia numquam suscipit, adipisci voluptatibus, consectetur est temporibus id dignissimos quod.",
  //     image: {
  //       src: '/images/temp/kanban2_small-min.jpg',
  //       alt: 'Anlagstavla med todo-lappar.',
  //       caption: 'Foto: Paul Hanaoka, unsplash.com',
  //       width: 640,
  //       height: 960,
  //       mediaQueries: [
  //         {
  //           minWidth: 580,
  //           src: '/images/temp/kanban2_medium-min.jpg',
  //         },
  //       ],
  //     }
  //   },
  //   {
  //     id: 6,
  //     title: "title 6",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum, alias inventore modi officia numquam suscipit, adipisci voluptatibus, consectetur est temporibus id dignissimos quod.",
  //     image: {
  //       src: '/images/temp/code_small-min.jpg',
  //       alt: 'Laptop med programmeringskod.',
  //       caption: 'Foto: James Harrison, unsplash.com',
  //       width: 1920,
  //       height: 1080,
  //       mediaQueries: [
  //         {
  //           minWidth: 768,
  //           src: '/images/temp/code_large-min.jpg',
  //         },
  //         {
  //           minWidth: 580,
  //           src: '/images/temp/code_medium-min.jpg',
  //         },
  //       ],
  //     },
  //   }
  // ];

  return (
    <>
      <div className={(styles["Carousel"])}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          lazy={true}
          navigation={{
            nextEl: ".slideNext",
            prevEl: ".slidePrev"
          }}
          pagination={{ clickable: true }}
          breakpoints={
            {
              768: {
                slidesPerView: 2,
                spaceBetween: 50
              },
              1024: {
                spaceBetween: 30,
                slidesPerView: 3
              },
              1280: {
                spaceBetween: 50,
                slidesPerView: 3
              }
            }
          }
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          {!!carouselData?.length && carouselData.map(data => (
            <SwiperSlide key={data.id}><CardCarousel {...data} onClick={onClick} open={openModal} setOpen={setOpenModal} setModalContent={setModalContent} dark={dark} /></SwiperSlide>
          ))}
          <button className="slideNext"></button>
          <button className="slidePrev"></button>
        </Swiper>
      </div>
      {/* <Modal open={openModal} setOpen={setOpenModal} >
        {!!modalContent && (
          carouselData
            .filter(data => data.id === modalContent)
            .map(content => (
              <ModalContent {...content} />
            ))
        )
        }
      </Modal> */}
    </>
  );
};

export default Carousel;
