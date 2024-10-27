import React from 'react';
import { Link } from "react-router-dom";
import './MainPage.css';

const MainPage = () => {
    return(
        <div className="hero">
            <div className="mask">
            <img className="into-img" src="./images/intro-bg2.jpg" alt="Сайт под ключ"/>
            </div>
            <div className="content">
                <p>Сайты под ключ.</p>
                <h1>ITnGo.</h1>
                <div>
                  <a href="#form" className="btn">Заказать</a>
                  <a href="#form" className="btn btn-light">написать</a>
                 </div>
            </div>
        </div>
    )
}

export default MainPage;