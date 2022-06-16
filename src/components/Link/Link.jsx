import React from "react";
import "./Link.scss";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ text, link = "/" }) => {
    return (
        <div className="app-link">
            <Arrow />
            {!link.includes("#") && (
                <a href={link} target="_blank" rel="noreferrer">
                    {text}
                </a>
            )}
            {!!link.includes("#") && (
                <AnchorLink href={link} offset="50">
                    {text}
                </AnchorLink>
            )}
        </div>
    );
};

export default Link;
