import React from "react";
import Link from "../Link/Link";
import Title from "../Title/Title";
import "./About.scss";

const About = () => {
    return (
        <section className="about container" id="company">
            <div className="about-content">
                <Title text="О компании"  />
                <div className="about-text-container">
                    <p className="about-text">
                        Холдинг РусАгроМаркет был учрежден для реализации федеральной сети Оптово- распределительных центров на территории Российской Федерации.
                    </p>
                    <p className="about-text">
                        Инициаторами проекта выступили группа компаний Ермак и инвестиционная компания Proxima Capital Group при поддержке Министерства Сельского Хозяйства РФ.
                    </p>
                </div>

                <ul className="about-links">
                    <li className="about-link">
                        <Link text="Оптово-распределительные центры" link="#centres" />
                    </li>
                    <li className="about-link">
                        <Link text="Фудтех решения" link="#foodtech" />
                    </li>
                    <li className="about-link">
                        <Link text="Проектные решения" link="#projects" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
