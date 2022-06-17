import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import "./InfoItem.scss";

const InfoItem = ({ data }) => {
    const { caption, tag, text, cards, buttonTitle, buttonLink, id } = data;
    const captionClass = id === "lk" ? "info-item-caption lk " : "info-item-caption";

    const renderCards = cards?.map((card) => {
        return (
            <li className="info-item-card" key={card.id}>
                <h4 className="info-item-card-title">
                    <span className="info-item-card-accent">{card.accent}</span>
                    {card.title}
                </h4>
                {card.text}
            </li>
        );
    });

    return (
        <div className="info-item-wrap">
            <div className="info-item">
                <div className="info-item-header">
                    <h3 className={captionClass}>{caption}</h3>
                    {!!tag && <span className="info-item-tag">{tag}</span>}
                </div>
                <p className="info-item-text">{text}</p>
                <ul className="info-item-list">{renderCards}</ul>
                <div className="info-item-bg" />
                {!!buttonLink && (
                    <div className="info-buttons">
                        <span>{buttonTitle}</span>

                        <RoundButton link={buttonLink} transparent={true} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoItem;
