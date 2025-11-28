// src/component/Reveal/Reveal.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Reveal.css';

const Reveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Nếu lướt tới nơi (xuất hiện trong màn hình)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Chỉ chạy 1 lần rồi thôi
                }
            },
            { threshold: 0.15 } // Hiện 15% là bắt đầu chạy hiệu ứng
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`reveal-wrapper ${isVisible ? 'active' : ''}`}
        >
            {children}
        </div>
    );
};

export default Reveal;