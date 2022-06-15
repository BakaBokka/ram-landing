import React, { useState } from "react";
import "./Goals.scss";
import Title from "../Title/Title";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

const infoData = [
    {
        id: 1,
        number: " 01",
        title: "Для государства",
        text: "Повышение конкурентоспособности малого и среднего бизнеса в экономике за счет доступа к организованному рынка сбыта на площадках ОРЦ, развитие  устойчивых торговых связей и экспортного потенциала",
    },
    {
        id: 2,
        number: " 02",
        title: "Для бизнеса",
        text: "Возможность круглогодичного хранения, доработки и сбыта сельхозпродукции по выгодным ценам. Возможность закупки на одном ОРЦ широкого спектра качественного российского и импортного продовольствия",
    },
    { id: 3, number: " 03", title: "Для населения", text: "Повышение качества продовольствия и доли российской сельхозпродукции в корзине потребления" },
];

const Goals = () => {
    const [showText, setShowText] = useState(false);
    const [itemId, setShowItemId] = useState(null);
   

    const handleShowText = ( id ) => {
        setShowText(!showText);
        setShowItemId(id);
    };

    const renderInfo = () =>
        infoData.map((item) => {
            const iconClass = showText && (item.id === itemId) ? "goals-info-icon clicked" : "goals-info-icon";
            const textClass = showText && (item.id === itemId) ? "goals-info-text clicked" : "goals-info-text";
           
            return (
                <li className="goals-info-item" key={item.id} id={item.id} onClick={() => handleShowText(item.id)}>
                    <div className="goals-info-caption">
                        <span className="goals-info-number">{item.number}</span>
                        <span className="goals-info-title">{item.title}</span>
                        <div className={iconClass}>
                            <Arrow />
                        </div>
                    </div>
                    <p className={textClass}>{item.text}</p>
                </li>
            );
        });

    return (
        <section className="goals container">
            <div className="goal-title">
                <Title text="Стратегические цели проекта" />
            </div>
            
            <div className="goals-content">
                <ul className="goals-info-list">{renderInfo()}</ul>
                <div className="goals-picture" />
            </div>
        </section>
    );
};

export default Goals;
