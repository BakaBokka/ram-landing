import React from "react";
import "./RoundButton.scss";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

const RoundButton = ({ link = "/", transparent }) => {
    const buttonClass = transparent ? "round-button transparent" : "round-button";
    return (
        <a className={buttonClass} href={link} >
            <div className="round-button-icon">
                <Arrow />
            </div>
        </a>
    );
};

export default RoundButton;
