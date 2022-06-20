import React, { useEffect, useRef } from "react";
import Title from "../Title/Title";
import map from "../../images/map.svg";
import "./Geography.scss";
import GeographyMapDot from "./GeographyMapDot/GeographyMapDot";
import { IS_MOBILE } from "../../const";

const Geography = () => {
    const geoRef = useRef();
    // const isMobile = window.innerWidth < 768;
    // const offset = isMobile && window.innerWidth > 500 ? 25 : 75;

    useEffect(() => {
        if (IS_MOBILE) {
            
            if (IS_MOBILE) {
                setTimeout(() => {
                    geoRef.current.scrollBy(300, 0);
                }, 100);
                setTimeout(() => {
                    console.log(window.innerWidth, " scrollLeft: ", geoRef.current.scrollLeft);
                }, 200);
            }
        }
    });

    const nskTooltipData = {
        caption1: "Запущена в эксплатацию первая очередь ОРЦ",
        caption2: "Запущен маркетплейс",
        item1: "Товарное производство 7840 тысяч тонн",
        item2: "Охват городского населения 20328 тысяч человек",
    };
    const srtTooltipData = {
        caption1: "Строительство первой очереди",
        item1: `Предполагаемый оборот 
        сельхозпродукции на 1 этапе 
        – не менее 80 тыс.тонн/год
        `,
        item2: `Площадь земельного участка
        проекта – 17,5 Га.
        `,
    };

    return (
        <section className="geography" id="geography">
            <header className="geography-header container">
                <div className="geography-title">
                    <Title text="География развития" />
                </div>

                <p className="geography-desc">Выступая связующим звеном между покупателями и поставщиками, мы эффективнно перераспределяем продукты на межрегиональном уровне.</p>
            </header>

            <div className="geography-map" id="map" ref={geoRef}>
                <div className="geography-map-image">
                    <img src={map} alt="Карта развития" />
                    <GeographyMapDot id="nsk" infoData={nskTooltipData} />
                    <GeographyMapDot id="srt" infoData={srtTooltipData} />
                </div>
            </div>
        </section>
    );
};

export default Geography;
