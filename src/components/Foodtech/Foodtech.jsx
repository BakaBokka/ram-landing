import React from "react";
import Title from "../Title/Title";
import "./Foodtech.scss";
import InfoItem from "../InfoItem/InfoItem";

const markerplaceData = {
    id: 1,
    caption: "Продуктовый оптовый маркетплейс",
    tag: "Запущен",
    text: "Онлайн-платформа для размещения заказа с единым каталогом продуктов, в первую очередь, категории FRESH, с упаковкой, автоматизированной логистикой и доставкой заказа клиенту.",
    cards: [
        {
            id: 1,
            title: "Выход на рынки HoReCa и несетевой розницы",
            accent: null,
            text: "Увеличение объема средне-оптовых продаж",
        },
        {
            id: 2,
            title: "Гибкость площадки",
            accent: null,
            text: "Инструмент работы с юридическими лицами и физическими лицами",
        },
        {
            id: 3,
            title: "Минимальная комиссия",
            accent: null,
            text: "Комиссия за сделку составляет всего – 2%",
        },
        {
            id: 4,
            title: "Логистика “под ключ”",
            accent: null,
            text: "В маркетлейс входят все логистические услуги",
        },
    ],
    buttonTitle: "Маркетплейс",
    buttonLink: "https://rusagro.market/",
};
const lkData = {
    id: 1,
    caption: "Личный Кабинет Арендатора",
    tag: "В разработке",
    text: "Для организации управления персоналом, пропусками на территорию, услугами ОРЦ и получения информации арендаторам доступен Личный Кабинет, который является удобным средством взаимодействия с инфраструктурой ОРЦ. ",
    cards: [
        {
            id: 1,
            title: "Взаимодействие с инфраструктурой ОРЦ",
            accent: null,
            text: "Заказ пропусков, бронирование доковых ворот",
        },
        {
            id: 2,
            title: "Удобный онлайн заказ услуг ",
            accent: null,
            text: "Заказ и учет логистических услуг в рамках склада (ОРЦ)",
        },
        {
            id: 3,
            title: "Хранение документов",
            accent: null,
            text: "Отслеживание документов, хранение в едином пространстве ",
        },
        {
            id: 4,
            title: "Поддержка клиентов",
            accent: null,
            text: "Быстрая связь с площадкой, решение индивидуальных вопросов",
        },
    ],
    buttonTitle: "Демо",
    buttonLink: "/",
};

const Foodtech = () => {
    return (
        <section className="foodtech">
            <div className="foodtech-title">
                <Title text="Фудтех решения" />
            </div>

            <ul className="foodtech-list">
                <li className="foodtech-item">
                    <InfoItem data={markerplaceData} />
                </li>
                <li className="foodtech-item">
                    <InfoItem data={lkData} />
                </li>
            </ul>
        </section>
    );
};

export default Foodtech;
