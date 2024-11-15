/*import "./HeroImg2Styles.css";*/
import "./MarketingBullshit.css";
import React from "react";

const MarketingBullshit = () => {
    return (
        <div className="superrow">
            <h1 className="whyus">Почему мы?</h1>
            <div className="row">
                <div className="left">
                    <img src="./images/seo.jpg" alt=""></img>
                </div>
                <div className="right">
                    <div className="content">
                        <p>
                        - Индивидуальный подход: Мы слушаем и понимаем ваши пожелания, чтобы создать сайт, который будет отражать ваш стиль и цели.
                        </p>
                        <p>
                        - Современные технологии: Используем только актуальные технологии и инструменты для разработки, что обеспечивает высокую скорость и безопасность вашего сайта.
                        </p>
                        <p>
                        - Оптимизация под SEO: Мы заботимся о том, чтобы ваш сайт был заметен в поисковых системах, что помогает привлекать больше клиентов.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MarketingBullshit;