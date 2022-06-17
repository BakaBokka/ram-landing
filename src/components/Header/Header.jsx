import React, { useState } from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import MenuButton from "../MenuButton/MenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { PHONE } from "../../const";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="app-header container">
            <div className="header-nav">
                <a href="/">
                    <img className="header-logo" src={logo} alt="Логотип РусАгроМаркет" />
                </a>

                <ul className="header-menu">
                    <li className="header-menu-item">
                        <AnchorLink href="#company" offset="50">
                            Компания
                        </AnchorLink>
                    </li>
                    <li className="header-menu-item">
                        <AnchorLink href="#ecosystem" offset="50">
                            Экосистема
                        </AnchorLink>
                    </li>
                    <li className="header-menu-item">
                        <AnchorLink href="#projects" offset="50">
                            Проекты
                        </AnchorLink>
                    </li>
                    <li className="header-menu-item">
                        <AnchorLink href="#geography" offset="50">
                            География
                        </AnchorLink>
                    </li>
                </ul>
            </div>

            <div className="header-contacts">
                <a className="header-phone" href={`tel:${PHONE}`}>
                    8 800 500 93 32
                </a>
                <ul className="header-socials">
                    <li className="header-social">
                        <a href="https://t.me/RusAgroMarket_bot">Telegram</a>
                    </li>
                    <li className="header-social">
                        <a href={`https://api.whatsapp.com/send/?phone=${PHONE}`}>WhatsApp</a>
                    </li>
                </ul>
            </div>
            <MenuButton onClick={handleShowMenu} />
            {!!showMenu && <MobileMenu onClick={handleShowMenu} />}
        </header>
    );
};

export default Header;
