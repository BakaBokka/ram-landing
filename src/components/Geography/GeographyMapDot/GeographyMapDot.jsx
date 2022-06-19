import React, { useState } from "react";
import { usePopper } from "react-popper";
import { IS_MOBILE } from "../../../const";

const GeographyMapDot = ({ id = "", infoData }) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
        modifiers: [
            {
                name: "flip",
                options: {
                    padding: 8,
                },
            },
            {
                name: "offset",
                options: {
                    offset: [100, 20],
                },
            },
        ],
    });

    const [showInfo, setShowInfo] = useState(false);
    const infoClass = showInfo ? "geography-info-list shown" : "geography-info-list";
    const dotClass = id === "srt" ? "geography-map-dot srt" : "geography-map-dot";

    const hoverOn = () => {
        setShowInfo(true);
    };

    const hoverOff = () => {
        setShowInfo(false);
    };

    const handleClick = () => {
        setShowInfo(!showInfo);
    };

    return (
        <>
            <div
                className={dotClass}
                onPointerEnter={!IS_MOBILE ? hoverOn : () => {}}
                onPointerLeave={!IS_MOBILE ? hoverOff : () => {}}
                onClick={IS_MOBILE ? handleClick : () => {}}
                ref={setReferenceElement}
            >
                <div className="geography-map-dot-underlay" />
            </div>
            <ul className={infoClass} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                <li className="geography-info">{infoData.caption1}</li>
                {!!infoData.caption2 && <li className="geography-info">{infoData.caption2}</li>}
                <li className="geography-info items">
                    <ul>
                        <li>{infoData.item1}</li>
                        <li>{infoData.item2}</li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default GeographyMapDot;
