import React, { useState } from "react";
import "./Banner.scss";
import bg from "../../images/mock-bg.png";
import poster from "../../images/poster.jpeg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";
import RoundButton from "../RoundButton/RoundButton";
import video from "../../video/video_header.mp4";
import booklet from "../../docs/booklet.pdf";
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
        pic: null,
    },
    // {
    //     id: 2,
    //     text: "Федеральная сеть оптово- распределительных центров",
    //     video: null,
    //     pic: bg,
    // },
];

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const currentPage = `0${activeSlide}`;

    const renderSlides = sliderData.map((slide) => {
        return (
            <SwiperSlide key={slide.id} virtualIndex={slide.id}>
                <div className="banner-slide container">
                    <div className="banner-slide-video-container">
                        {!!slide.video && <video className="banner-slide-video" src={slide.video} muted autoPlay loop playsInline poster={poster} />}
                        {!!slide.pic && <img className="banner-slide-video" src={slide.pic} alt="Фоновая фотография" />}
                        <div className="banner-slide-video-bg" />
                    </div>

                    <h1 className="banner-slide-text">{slide.text} </h1>
                    <div className="banner-button">
                        <RoundButton link={booklet} />
                        <a className="banner-button-link" href={booklet} target="_blank" rel="noreferrer">
                            Скачать презентацию
                        </a>
                    </div>

                    {sliderData.length > 1 && (
                        <div className="slider-controls container">
                            <div className="slider-buttons">
                                <div className="slider-button-prev">
                                    <ArrowRight />
                                </div>
                                <div className="slider-button-next">
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="slider-pages ">
                                <span className="slider-page active">{currentPage}</span>
                                <span className="slider-page">/0{sliderData.length}</span>
                            </div>
                        </div>
                    )}
                </div>
            </SwiperSlide>
        );
    });

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
            <div className="about-bg" />
        </section>
    );
};

export default Banner;
