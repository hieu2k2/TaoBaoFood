// src/component/Reservation/Reservation.jsx
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Import icon điện thoại
import './Reservation.css';

const Reservation = () => {
  return (
    // ID="contact" ĐỂ HEADER LINK TỚI ĐƯỢC
    <section id="contact" className="reservation-section">
      <div className="container">
        
        {/* 1. Tiêu đề */}
        <h2 className="res-title">Kontakt & Tischreservierung</h2>
        
        {/* 2. Nút gọi điện */}
        <div className="phone-btn-wrapper">
            <a href="tel:064039795778" className="btn-phone">
                <FaPhoneAlt size={24} /> 
                <span>064039795778</span>
            </a>
        </div>

        {/* 3. Bản đồ Google Map */}
        <div className="map-wrapper">
          <iframe 
            title="Google Map"
            className="google-map"
            /* Bạn thay link Google Map địa chỉ quán bạn vào đây nhé */
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.8035325981627!2d8.6705498!3d50.537825399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc590064626b45%3A0x51cbff018363f549!2sTaoBao%20Pan-Asian%20Cuisine!5e0!3m2!1svi!2s!4v1764127755270!5m2!1svi!2s"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Reservation;