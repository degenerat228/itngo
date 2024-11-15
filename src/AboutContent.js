import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
    return(
        <div className="about">
            <div className="left">
                <h1>Делаем сайты наиболее удобные для использования</h1>
                <p>- Интуитивно понятный интерфейс<br></br>
                - Внедрение стороних сервисов
                </p>
                <a href="#form">
                    <button className="btn">Узнать подробнее</button>
                </a>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack bottom">
                        <img src="./images/mark34.png" className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;