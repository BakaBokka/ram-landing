import React, { useState } from "react";
import Title from "../Title/Title";
import { ReactComponent as WarehouseIcon } from "../../images/warehouse.svg";
import { ReactComponent as FirstLine } from "../../images/line.svg";
import { ReactComponent as SecondLine } from "../../images/second-line.svg";
import { ReactComponent as ThirdLine } from "../../images/third-line.svg";
import "./Ecosystem.scss";

const Ecosystem = () => {
    const [hovered, setHovered] = useState(false);
    const contentClass = hovered ? "ecosystem-content hovered" : "ecosystem-content";
    const captionClass = hovered ? "ecosystem-caption hovered" : "ecosystem-caption";
    const textClass = hovered ? "ecosystem-text small hovered" : "ecosystem-text small";
    const lineClass = hovered ? "ecosystem-line hovered" : "ecosystem-line";
    const isMobile = window.innerWidth < 768;
 
    const onHoverOn = () => {
        setHovered(true);
    };
    const onHoverOff = () => {
        setHovered(false);
    };

    const handleClick = () => {
        setHovered(!hovered);
    }

    return (
        <section className="ecosystem" id="ecosystem">
            <div className="ecosystem-title">
                <Title text="Экосистема холдинга" />
            </div>

            <div className={contentClass} onPointerEnter={!isMobile ? onHoverOn : () => {}} onPointerLeave={ !isMobile ? onHoverOff : () => {}} onClick={ isMobile ? handleClick : () => {}}>
                <h3 className={captionClass}>Поставщики, производители</h3>
                <div className="ecosystem-infograph">
                    <div className="ecosystem-info">
                        <div className="ecosystem-dot" />
                        <p className={textClass}>Поставляют, хранят товары</p>
                    </div>
                    <div className="ecosystem-info">
                        <div className="ecosystem-circle">
                            <WarehouseIcon />
                            <span>Оптово-распределительные центры</span>
                        </div>
                    </div>

                    <div className="ecosystem-info">
                        <div className="ecosystem-dot" />
                        <h4 className="ecosystem-info-title">Дистрибуция в торговые сети</h4>
                        <p className="ecosystem-text">Мы предлагает не только качественные складские мощности, но и быстрый выход вашей продукции в сети.</p>
                    </div>
                    <div className="ecosystem-info">
                        <div className="ecosystem-dot" />
                        <h4 className="ecosystem-info-title">Торговые павильоны</h4>
                        <p className="ecosystem-text">Это новое современное пространство для ведения цивилизованной мелкооптовой торговли.</p>
                    </div>
                    <div className="ecosystem-info">
                        <div className="ecosystem-dot" />
                        <h4 className="ecosystem-info-title">Маркетплейс</h4>
                        <p className="ecosystem-text">
                            Продукт является интегрированной с логистическими центрами онлайн-платформой сбора заказов, хранения и доставки FMCG в сегменте B2B, B2C.
                        </p>
                    </div>
                    <div className="ecosystem-infograph-undelay" />
                </div>
                <div className={`${lineClass} first`}>
                    <FirstLine />
                </div>
                <div className={lineClass}>
                    <SecondLine />
                </div>
                <div className={`${lineClass} third`}>
                    <ThirdLine />
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
