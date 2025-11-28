// src/component/WelcomeSection/WelcomeSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './WelcomeSection.css';
import khonggianquan from '../../assets/Menu/khonggianquan.jpg';
import monkethop from '../../assets/Menu/monkethop.png';

const sushiBoatImg = monkethop;
const verticalFoodImg = khonggianquan;

const WelcomeSection = () => {
  // 1. Tạo Ref để "ngắm" vào phần About Section
  const sectionRef = useRef(null);
  // 2. State để lưu trạng thái: false = chưa hiện, true = đã hiện
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logic: Khi cuộn đến sectionRef thì set isVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Nếu phần tử xuất hiện trong màn hình
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Chỉ chạy 1 lần rồi thôi (không ẩn lại khi cuộn đi)
        }
      },
      { threshold: 0.2 } // Xuất hiện 20% chiều cao thì bắt đầu chạy
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="welcome-container">
      
      {/* --- PHẦN 1: ASIAN FOOD SPOT (Giữ nguyên) --- */}
      <div className="spotlight-section">
        <h2 className="spot-title">ASIAN FOOD SPOT</h2> 
        <p className="spot-subtitle">IN DEUTSCHLAND</p>
        
        <div className="image-frame-gold">
          <img src={sushiBoatImg} alt="Sushi Boat" className="spot-image" />
        </div>
      </div>

      {/* --- PHẦN 2: ABOUT US (Thêm Ref và Class điều kiện) --- */}
      <div 
        className="about-section" 
        ref={sectionRef} // Gắn camera theo dõi vào đây
      >
        
        {/* Cột Trái: Bay từ trái vào */}
        <div className={`about-content ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
          <span className="about-label">TAOBAO - RESTAURANT</span>
          <h2 className="about-title">Über Uns</h2>
          <p className="about-desc">
            Taobao Restaurant ist der Ort, an dem Ihre Leidenschaft für die Gastronomie aufblüht. 
            Besonders die authentische asiatische Küche.
          </p>
          <p className="about-desc">
            Wir sind zuversichtlich, die perfekte Verbindung zwischen traditioneller Kultur und modernen kreativen Elementen direkt in Linden, Deutschland, zu bieten.
          </p>
        </div>

        {/* Cột Phải: Bay từ phải vào */}
        <div className={`about-image-wrapper ${isVisible ? 'slide-in-right' : 'hidden-right'}`}>
           <img src={verticalFoodImg} alt="Table Food" className="vertical-food-img" />
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;