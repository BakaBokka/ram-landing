import React from "react";
import "./Link.scss";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

const Link = ({ text, link = "/" }) => {
    return (
        <div className="app-link">
            <Arrow />
            <a href={link} target="_blank">
                {text}
            </a>
        </div>
    );
};

export default Link;
