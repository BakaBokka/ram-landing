import React, { useState } from "react";
import "./Banner.scss";
import bg from "../../images/mock-bg.png";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";
import RoundButton from "../RoundButton/RoundButton";
import video from "../../video/video_header.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const sliderData = [
    {
        id: 1,
        text: "РусАгроМаркет — современная инфраструктура российского рынка продовольствия",
        video: video,
        pic: null
    },
    {
        id: 2,
        text: "Федеральная сеть оптово- распределительных центров",
        video: null,
        pic: bg

    },
];

const renderSlides = sliderData.map((slide) => {
    return (
        <SwiperSlide key={slide.id} virtualIndex={slide.id}>
            <div className="banner-slide">
                <div className="banner-slide-video-container">
                  {!!slide.video && <video className="banner-slide-video" src={slide.video} muted autoPlay loop />}
                  {!!slide.pic && <img className="banner-slide-video" src={slide.pic} alt="Фоновая фотография" />}
                </div>

                <h1 className="banner-slide-text">{slide.text} </h1>
            </div>
        </SwiperSlide>
    );
});

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const currentPage = `0${activeSlide}`;

    return (
        <section className="banner">
            <div className="banner-slider">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                    navigation={{
                        prevEl: ".slider-button-prev",
                        nextEl: ".slider-button-next",
                    }}
                >
                    {renderSlides}
                </Swiper>
            </div>

            <div className="slider-controls">
                <div className="slider-buttons">
                    <div className="slider-button-prev">
                        <ArrowRight />
                    </div>
                    <div className="slider-button-next">
                        <ArrowRight />
                    </div>
                </div>

                <div className="slider-pages">
                    <span className="slider-page active">{currentPage}</span>
                    <span className="slider-page">/0{sliderData.length}</span>
                </div>
            </div>

            <div className="banner-button">
                <RoundButton />
                <span>Скачать презентацию</span>
            </div>
        </section>
    );
};

export default Banner;
