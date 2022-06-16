import React from "react";
import "./MobileMenu.scss";
import { ReactComponent as Close } from "../../images/close.svg";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { PHONE } from "../../const";

const MobileMenu = ({ onClick }) => {
    return (
        <div className="mobile-menu">
            <div className="mobile-menu-content">
                <header className="mobile-menu-header">
                    <h3 className="mobile-menu-caption">РусАгроМаркет</h3>
                    <button className="mobile-menu-close" onClick={() => onClick()}>
                        <Close />
                    </button>
                </header>

                <ul className="mobile-menu-items">
                    <li className="mobile-menu-item" onClick={() => onClick()}>
                        <Arrow />
                        <AnchorLink className="mobile-menu-link" href="#company" offset='30'>
                            Компания
                        </AnchorLink>
                    </li>
                    <li className="mobile-menu-item" onClick={() => onClick()}>
                        <Arrow />
                        <AnchorLink className="mobile-menu-link" href="#ecosystem" offset='30'>
                            Экосистема
                        </AnchorLink>
                    </li>
                    <li className="mobile-menu-item" onClick={() => onClick()}>
                        <Arrow />
                        <AnchorLink className="mobile-menu-link" href="#projects" offset='30'>
                            Проекты
                        </AnchorLink>
                    </li>
                    <li className="mobile-menu-item" onClick={() => onClick()}>
                        <Arrow />
                        <AnchorLink className="mobile-menu-link" href="#geography" offset='30'>
                            География
                        </AnchorLink>
                    </li>
                </ul>
            </div>

            <footer className="mobile-menu-footer">
                <a className="header-phone" href={PHONE}>
                    8 800 500 93 32
                </a>
                <ul className="header-socials">
                    <li className="header-social">
                        <a href="/">Telegram</a>
                    </li>
                    <li className="header-social">
                        <a href={`https://api.whatsapp.com/send/?phone=${PHONE}`}>WhatsApp</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default MobileMenu;
