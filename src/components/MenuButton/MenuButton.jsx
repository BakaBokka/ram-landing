import React from "react";
import "./MenuButton.scss";
import { ReactComponent as BurgerIcon } from "../../images/hamburger.svg";

const MenuButton = ({onClick}) => {
    return (
        <button className="menu-button" onClick={() => onClick()}>
            <BurgerIcon />
            <span className="menu-button-text">Меню</span>
        </button>
    );
};

export default MenuButton;
