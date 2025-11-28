// src/component/FoodGallery/FoodGallery.jsx
import React, { useEffect, useState, useRef } from 'react';
import './FoodGallery.css';
import bgImage1 from '../../assets/Menu/10 Pho Bo.jpg';
import bgImage2 from '../../assets/Menu/11 Pho Ga.jpg';
import dishImage from '../../assets/Menu/12 Pad Thai.jpg';
import bgImage4 from '../../assets/Menu/anhmei.jpg';
import dishImage2 from '../../assets/Menu/kgian.jpg';
// Dữ liệu ảnh (Bạn thay link ảnh thật của 5 món vào đây)
const galleryImages = [
    bgImage1, // Salad/Thịt
    bgImage2, // Sushi dài
    dishImage, // Salad Bát
    bgImage4, // Sushi cuộn
    dishImage2  // Nước uống Matcha
];

const FoodGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Nếu phần tử xuất hiện trong màn hình
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // Sau khi hiện rồi thì ngắt theo dõi để không bị nhấp nháy lại
                    observer.disconnect();
                }
            },
            { threshold: 0.2 } // Khi lướt thấy 20% component thì bắt đầu chạy hiệu ứng
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="food-gallery-section" ref={sectionRef}>
            <div className="gallery-container">
                {galleryImages.map((img, index) => (
                    <div
                        key={index}
                        // Nếu isVisible = true thì thêm class "visible" vào
                        className={`gallery-item ${isVisible ? 'visible' : ''}`}
                    >
                        <img src={img} alt={`Gallery ${index}`} className="gallery-img" />
                    </div>
                ))}
            </div>

            {/* Đường kẻ vàng dưới chân giống mẫu */}
            <div style={{
                borderBottom: '1px solid #d4af37',
                marginTop: '80px',
                opacity: 0.5
            }}></div>
        </section>
    );
};

export default FoodGallery;