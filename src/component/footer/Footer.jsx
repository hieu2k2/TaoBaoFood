// src/component/footer/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo/Logo.png'; // Đảm bảo đường dẫn logo đúng
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">

                    {/* --- CỘT TRÁI: ĐỊA CHỈ & GIỜ MỞ CỬA --- */}
                    <div className="footer-col footer-left">
                        <div className="mb-4">
                            <h3>Adresse</h3>
                            <p>Tannenweg 97, 35440 Linden , Germany</p>
                        </div>

                        <div>
                            <h3>Öffnungszeiten</h3>
                            <p><strong>Montag bis Samstag</strong></p>
                            <p>10:00 - 19:30 Uhr </p>
                        </div>
                    </div>

                    {/* --- CỘT GIỮA: LOGO TO --- */}
                    <div className="footer-col footer-center">
                        <img src={logo} alt="Taobao Logo" className="footer-logo" />
                    </div>

                    {/* --- CỘT PHẢI: LIÊN HỆ & SOCIAL --- */}
                    <div className="footer-col footer-right">
                        <div className="mb-4">
                            <h3>Kontakt</h3>
                            <p>Tel. 064039795778</p>
                            <p className="contact-info">
                                Email: <a href="mailto:nvinh9058@gmail.com" className="email-link">nvinh9058@gmail.com</a>
                            </p>
                        </div>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100012873246937" className="social-btn" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/taobaofood/" className="social-btn" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>

                </div>

                {/* --- DÒNG CUỐI --- */}
                <div className="copyright-bar">
                    <p>Urheberrecht © 2025 Taobao Restaurant & HieuNguyen. Alle Rechte vorbehalten .</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;