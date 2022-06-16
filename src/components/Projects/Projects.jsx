import React from "react";
import Title from "../Title/Title";
import "./Projects.scss";
import InfoItem from "../InfoItem/InfoItem";

const markerplaceData = {
    id: 1,
    caption: `Решения "под ключ"`,
    tag: null,
    text: "Нашим партнерам мы предлагаем комплексное решение от привлечения проектного финансирования и курирования строительства ОРЦ до организации сбыта продукции через Маркетплейс и торговые сети. ",
    cards: [
        {
            id: 1,
            title: "лет",
            accent: "9 ",
            text: "Опыта разработки ОРЦ",
        },
        {
            id: 2,
            title: "100%",
            accent: "на ",
            text: "Готовая проектная, юридическая и управленческая документация",
        },
        {
            id: 3,
            title: "Лояльность клиентов",
            accent: null,
            text: "Сформированная база клиентов",
        },
        {
            id: 4,
            title: "Готовые каналы сбыта",
            accent: null,
            text: "Торговые сети, собственных маркетплейс",
        },
    ],
    buttonTitle: "",
    buttonLink: null,
};

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-title">
                <Title text="Проектные решения" />
            </div>

            <ul className="projects-list">
                <li className="projects-item">
                    <InfoItem data={markerplaceData} />
                </li>
            </ul>
        </section>
    );
};

export default Projects;
