import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- 1. IMPORT CÁI NÀY
import './HeroBanner.css';

// --- (BỎ IMPORT PDF VÌ KHÔNG DÙNG NỮA) ---
// import pdfFile from '../../assets/Menu/taobao-web.pdf'; 

// --- 2. IMPORT ẢNH TỪ ASSETS ---
import bgImage1 from '../../assets/Menu/10 Pho Bo.jpg';
import bgImage2 from '../../assets/Menu/11 Pho Ga.jpg';
import dishImage from '../../assets/Menu/12 Pad Thai.jpg';
import UdonMiso from '../../assets/Menu/13 Udon Miso.jpg';
import UdonFeuer from '../../assets/Menu/16 Udon Feuer.jpg';
import UdonTraumCurry from '../../assets/Menu/17 UdonTraumCurry.jpg';
import TokyoUdon from '../../assets/Menu/18 Tokyo Udon.jpg';
import MangoTango from '../../assets/Menu/19 MangoTango.jpg';
import ErdnussCurryLover from '../../assets/Menu/20 Erdnuss-Curry Lover.jpg';
import RedSurprise from '../../assets/Menu/21 Red Surprise.jpg';
import ChiliBeef from '../../assets/Menu/22 Chili Beef.jpg';
import KoreanBeef from '../../assets/Menu/23 Korean Beef.jpg';
import ChickenSpringen from '../../assets/Menu/24 Chicken Springen.jpg';
import DuckandSauce from '../../assets/Menu/25 Duck and Sauce.jpg';
import ChiliAlibaba from '../../assets/Menu/26 Chili Alibaba.jpg';

// --- 3. GÁN BIẾN VÀO MẢNG ---
const backgroundImages = [
    bgImage1, bgImage2, UdonMiso, UdonFeuer, UdonTraumCurry,
    TokyoUdon, MangoTango, ErdnussCurryLover, RedSurprise,
    ChiliBeef, KoreanBeef, ChickenSpringen, DuckandSauce, ChiliAlibaba
];

const foodImage = dishImage;

const HeroBanner = () => {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    // 2. KHAI BÁO HOOK CHUYỂN TRANG
    const navigate = useNavigate(); 

    // Tự động đổi ảnh nền sau 4 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // --- HÀM XỬ LÝ CHUYỂN TRANG MENU ---
    const handleViewMenu = () => {
        setIsLoading(true); // 1. Hiện màn hình đen (Loading)

        // 2. Đợi chút cho hiệu ứng chạy
        setTimeout(() => {
            // 3. Chuyển sang trang Menu (Giả sử đường dẫn là /menu)
            navigate('/menu'); 
            
            // Không cần setIsLoading(false) vì khi chuyển trang component này sẽ tự mất
        }, 1500); // Giảm xuống 1.5s cho nhanh, khách đỡ phải chờ lâu
    };

    return (
        <section className="hero-section">

            {/* --- PHẦN HIỆU ỨNG LOADING --- */}
            {isLoading && (
                <div className="page-transition-overlay">
                    <div className="transition-content">
                        <h2 className="transition-logo">TAOBAO</h2>
                        <div className="transition-spinner"></div>
                    </div>
                </div>
            )}

            {/* --- SLIDER ẢNH NỀN --- */}
            {backgroundImages.map((img, i) => (
                <div
                    key={i}
                    className={`bg-slide ${i === index ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
            <div className="overlay"></div>

            {/* --- NỘI DUNG CHÍNH --- */}
            <div className="container hero-content">
                <div className="row align-items-center h-100 content-wrapper">

                    {/* Cột Trái: Chữ */}
                    <div className="col-lg-6 col-md-12 text-white text-column">
                        <div className="brand-badge">EST. 2025</div>
                        <h1 className="hero-title">
                            ASIAN FUSION <br /> <span className="gold-text">RESTAURANT</span>
                        </h1>
                        <p className="hero-desc">
                            Erleben Sie die kulinarische Feinheit der östlichen Küche in einem eleganten Ambiente.
                        </p>

                        {/* --- SỬA SỰ KIỆN ONCLICK --- */}
                        <button
                            className="btn-gold"
                            onClick={handleViewMenu}
                        >
                            Speisekarte
                        </button>

                    </div>

                    {/* Cột Phải: Ảnh món ăn xoay */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center image-column">
                        <div className="food-circle-container">
                            <div className="gold-ring"></div>
                            <img src={foodImage} alt="Signature Dish" className="floating-food" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner;