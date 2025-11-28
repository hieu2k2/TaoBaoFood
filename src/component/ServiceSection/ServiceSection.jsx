// src/component/ServiceSection/ServiceSection.jsx
import React from 'react';
import './ServiceSection.css';
import khonggianquan from '../../assets/Menu/khonggianquan.jpg';
import Phobo from '../../assets/Menu/10 Pho Bo.jpg';
import AnhMeo from '../../assets/Menu/anhmei.jpg';
import Monkethop from '../../assets/Menu/monkethop.png';
// Dữ liệu cho 4 vòng tròn (Bạn thay link ảnh thật vào đây nhé)
const servicesData = [
    {
        id: 1,
        title: "Raum",
        desc: "Gemütlich wie zu Hause.",
        image: khonggianquan
    },
    {
        id: 2,
        title: "Spezialitäten",
        desc: "Die Kombination traditioneller vietnamesischer Gerichte.",
        image: Phobo
    },
    {
        id: 3,
        title: "Das Gericht",
        desc: "Vielfalt an asiatischen Gerichten.",
        image: Monkethop
    },
    {
        id: 4,
        title: "Bedienung",
        desc: "Freundlich und professionell.",
        image: AnhMeo
    }
];

const ServiceSection = () => {
    return (
        <section className="service-section">
            <div className="container">
                {/* Phần tiêu đề chung */}
                <div className="service-header">
                    <span className="service-label">TAOBAO - SERVICE</span>
                    <h2 className="service-title">Was bringen wir?</h2>
                    <p className="service-desc">
                        Tauchen Sie ein in die feinen asiatischen Erlebnisse und genießen Sie unvergessliche Momente bei TAOBAO, wo wir Ihnen das Beste aus Asien bringen.
                    </p>
                </div>

                {/* Lưới 4 vòng tròn */}
                <div className="service-grid">
                    {servicesData.map((item) => (
                        <div key={item.id} className="service-item">
                            {/* Ảnh nền */}
                            <div
                                className="service-bg"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Chữ đè lên trên */}
                            <div className="service-content">
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;