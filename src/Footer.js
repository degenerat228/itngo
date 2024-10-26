import "./FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Moscow.</p>
                            <p>Russia.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaTelegram size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        8-915-094-51-82</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        itngodev@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>О компании</h4>
                    <p>Мы занимаемся созданием веб-сайтов для компаний и частных лиц для повышение их продаж и узнаваймости
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;