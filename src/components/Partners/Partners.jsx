import React from "react";
import "./Partners.scss";
import Title from "../Title/Title";
import { ReactComponent as Proxima } from "../../images/partners/proxima.svg";
import { ReactComponent as X5 } from "../../images/partners/x5.svg";
import { ReactComponent as Minhoz } from "../../images/partners/minhoz.svg";
import { ReactComponent as Magnit } from "../../images/partners/magnit.svg";
import { ReactComponent as VTB } from "../../images/partners/vtb.svg";
import { ReactComponent as Tochka } from "../../images/partners/tochka.svg";
import { ReactComponent as Qiwi } from "../../images/partners/qiwi.svg";
import { ReactComponent as Fasol } from "../../images/partners/fasol.svg";

const Partners = () => {
    return (
        <section className="partners container">
            <Title text="Наши партнеры" />
            <div className="partners-content">
                <ul className="partners-list">
                    <li className="partners-item">
                        <a href=" https://proximagroup.ru/">
                            <Proxima />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://www.x5.ru/ru/" target="_blank" rel="noreferrer" >
                            <X5 />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://mcx.gov.ru/" target="_blank" rel="noreferrer" >
                            <Minhoz />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://magnit.ru/" target="_blank" rel="noreferrer" >
                            <Magnit />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://www.vtb.ru/" target="_blank" rel="noreferrer" >
                            <VTB />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://tochka.com/" target="_blank" rel="noreferrer" >
                            <Tochka />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://qiwi.com/" target="_blank" rel="noreferrer" >
                            <Qiwi />
                        </a>
                    </li>
                    <li className="partners-item">
                        <a href="https://myfasol.ru/about/" target="_blank" rel="noreferrer" >
                            <Fasol />
                        </a>
                    </li>
                    <li className="partners-item">
                      
                    </li>
                    <li className="partners-item">
                      
                    </li>
                    <li className="partners-item">
                      
                    </li>
                    <li className="partners-item">
                      
                    </li>
                </ul>
              
            </div>
        </section>
    );
};

export default Partners;
