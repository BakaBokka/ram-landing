import React, { useState } from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import MenuButton from "../MenuButton/MenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import {PHONE} from "../../const";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
      setShowMenu(!showMenu);
    }

    return (
        <header className="app-header container">
            <div className="header-nav">
                <img className="header-logo" src={logo} alt="Логотип РусАгроМаркет" />

                <ul className="header-menu">
                    <li className="header-menu-item">
                        <a href="/#">Компания</a>
                    </li>
                    <li className="header-menu-item">
                        <a href="/">Экосистема</a>
                    </li>
                    <li className="header-menu-item">
                        <a href="/">Проекты</a>
                    </li>
                    <li className="header-menu-item">
                        <a href="/">География</a>
                    </li>
                </ul>
            </div>

            <div className="header-contacts">
                <a className="header-phone" href={`tel:${PHONE}`}>
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
            </div>
            <MenuButton onClick={handleShowMenu}/>
           {!!showMenu && <MobileMenu onClick={handleShowMenu} />}
        </header>
    );
};

export default Header;
