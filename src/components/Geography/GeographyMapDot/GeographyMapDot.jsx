import React, { useState, useEffect } from "react";
import { usePopper } from "react-popper";

const GeographyMapDot = ({ id = "", infoData }) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [offset, setOffset] = useState(0);
    const isMobile = window.innerWidth < 768;
    const map = document.getElementById("map");
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

    useEffect(() => {
        if (isMobile) {
            setOffset(150);
            setTimeout(() => {
                map && map.scrollBy(offset, 0);
            }, 600);
            setTimeout(() => {
              console.log("OFFSET:", offset, "SCROLLLEFT:", map?.scrollLeft);
            }, 700)
           
        } else {
            setOffset(0);
            setTimeout(() => {
                map && map.scrollBy(offset, 0);
            }, 600);
            setTimeout(() => {
              console.log("OFFSET:", offset, "SCROLLLEFT:", map?.scrollLeft);
            }, 700)
        }
       
    }, [offset, isMobile, map]);

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
                onPointerEnter={!isMobile ? hoverOn : () => {}}
                onPointerLeave={!isMobile ? hoverOff : () => {}}
                onClick={isMobile ? handleClick : () => {}}
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
