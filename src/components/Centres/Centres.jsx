import React from "react";
import Title from "../Title/Title";
import "./Centres.scss";
import InfoItem from "../InfoItem/InfoItem";

const nskData = {
    id: 1,
    caption: "ОРЦ в Новосибирске",
    tag: "Запущена первая очередь",
    text: " Мы обеспечиваем все условия начиная от хранения в мультитемпературных терминалах класса «А» и организации предпродажной подготовки сельскохозяйственной продукции до полного комплекса логистических услуг и дистрибуции товаров.",
    cards: [
        {
            id: 1,
            title: " га",
            accent: "108",
            text: "Площадь ОРЦ",
        },
        {
            id: 2,
            title: " тыс. м²",
            accent: "28",
            text: " Площадь оптовых павильонов",
        },
        {
            id: 3,
            title: " тыс. м²",
            accent: "75",
            text: "Площадь зоны хранения",
        },
        {
            id: 4,
            title: " тыс. палетомест",
            accent: "82",
            text: " Объем единовре-менного хранения",
        },
    ],
    buttonTitle: "Сайт ОРЦ",
    buttonLink: "https://ramnsk.ru/",
};
const saratovData = {
    id: 1,
    caption: "ОРЦ в Саратове",
    tag: "Строительство",
    text: "Реализация проекта позволит создать более 1000  рабочих мест, снизит транспортную нагрузку, обеспечит доступ к товаропроводящей сети местным сельхозпроизводителям, что отразится на снижении цен плодоовощной продукции. Предполагаемый оборот сельхозпродукции на 1 этапе реализации проекта – не менее 80 тыс.тонн в год.",
    cards: [
        {
            id: 1,
            title: " га",
            accent: "17.5",
            text: "Площадь ОРЦ",
        },
        {
            id: 2,
            title: " тыс. м²",
            accent: "2.9",
            text: "Температурный кросс док",
        },
        {
            id: 3,
            title: " тыс. м²",
            accent: "7.5",
            text: "Площадь оптовых павильонов",
        },
        {
            id: 4,
            title: "  м²",
            accent: "2.5",
            text: "фасовочно-упаковочный производственный комплекс",
        },
    ],
    buttonTitle: "Презентация",
    buttonLink: null
};

const rostovData = {
    id: 1,
    caption: "ОРЦ в Ростове-на-Дону",
    tag: "Проектирование",
    text: "Реализация проекта позволит единовременно хранить более 40 тысяч тонн сельскохозяйственной продукции в мультитемпературных складах и торговых павильонах, а также создать более 500 рабочих мест. Для местных производителей сельхоз продукции ОРЦ откроет новые удобные каналы сбыта, включаещие не только традиционную торговлю в павильонах, но и онлайн-площадку.",
    cards: [
        {
            id: 1,
            title: " га",
            accent: "200",
            text: "Земельный участок",
        },
        {
            id: 2,
            title: " тыс. м²",
            accent: "70",
            text: "площадь 1й очереди",
        },
        {
            id: 3,
            title: " тыс. м²",
            accent: "50",
            text: "2 мультитемпературных склада",
            wordBreak: true
        },
        {
            id: 4,
            title: "  тыс. м²",
            accent: "20",
            text: "2 торговых павильона",
        },
    ],
    buttonTitle: "Презентация",
    buttonLink: null
};

const Centres = () => {
    return (
        <section className="centres container" id="centres">
            <div className="centres-title">
                <Title text="Оптово-распределительные центры " />
            </div>

            <ul className="centres-list">
                <li className="centres-item nsk">
                    <InfoItem data={nskData} />
                </li>
                <li className="centres-item srt">
                    <InfoItem data={saratovData} />
                </li>
                <li className="centres-item rst">
                    <InfoItem data={rostovData} />
                </li>
            </ul>
        </section>
    );
};

export default Centres;
