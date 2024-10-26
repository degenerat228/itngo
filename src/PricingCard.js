import "./PricingCardStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Сайт Визитка -</h3>
                <span className="bar"></span>
                <p className="btc">50 000 руб</p>
                <p>- За 5 дня -</p>
                <p>- О человеке или компании -</p>
                <p>- Контакты -</p>
                <p>- Данные об услугах -</p>
                <a href="#form" className="btn">
                Заказать сейчас
                </a>
            </div>
            <div className="card">
                <h3>- Интернет Магазин -</h3>
                <span className="bar"></span>
                <p className="btc">50 000 руб</p>
                <p>- За 5 дня -</p>
                <p>- Карточка товара -</p>
                <p>- Поиск товаров -</p>
                <p>- Информация о магазине -</p>
                <a href="#form" className="btn">
                Заказать сейчас
                </a>
            </div>
            <div className="card">
                <h3>- Экспресс -</h3>
                <span className="bar"></span>
                <p className="btc">150 000 руб</p>
                <p>- За 24 часа -</p>
                <p>- Любой Сайт -</p>
                <p>- Интернет-магазин -</p>
                <p>- Сайт Визитка -</p>
                <a href="#form" className="btn">
                Заказать сейчас
                </a>
            </div>
        </div>
    </div>
  )
}

export default PricingCard;