import React from "react";
import "./Footer.scss";
import { ReactComponent as Logo } from "../../images/logo-footer.svg";
import { PHONE } from "../../const";
import Link from "../Link/Link";

const Footer = () => {
    return (
        <footer className="app-footer container">
            <Logo />

            <div className="app-footer-content">
                <div className="app-footer-info">
                    <h3 className="app-footer-info-title">Центральный офис в Москве</h3>
                    <a className="app-footer-info-tel" href={`tel:${PHONE}`}>
                        8 800 500 93 32
                    </a>
                    <a className="app-footer-info-mail" href="mailto:info@rosagromarket.ru">
                        info@rosagromarket.ru
                    </a>
                    <span className="app-footer-info-address">Москва, 1-й Магистральный туп., д. 5А БЦ «Магистраль Плаза»</span>
                </div>

                <div className="app-footer-info">
                    <h3 className="app-footer-info-title">Новосибирск</h3>
                    <a className="app-footer-info-tel" href={`tel:${PHONE}`}>
                        8 800 500 93 32
                    </a>
                    <a className="app-footer-info-mail" href="mailto:info@rosagromarket.ru">
                        info@rosagromarket.ru
                    </a>
                    <span className="app-footer-info-address">Новосибирская область, Обь городской округ, нп. 3307 км, 30кА1</span>
                </div>

                <div className="app-footer-info">
                    <h3 className="app-footer-info-title">Быстрые ссылки</h3>
                   <Link text="ОРЦ" link="https://ramnsk.ru/"/>
                   <Link text="Маркетплейс" link="https://rusagro.market/"/>
                   <Link text="Личный кабинет"/>
                </div>
            </div>

            <div className="app-footer-policies">
                <span className="app-footer-copy">Copyright © «РусАгроМаркет» Все права защищены</span>
                <a href="/" target="_blank" rel="noreferrer">
                    Политика конфиденциальности
                </a>
            </div>
        </footer>
    );
};

export default Footer;
