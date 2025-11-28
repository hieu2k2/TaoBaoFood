// src/component/FloatingWhatsApp/FloatingWhatsApp.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import icon WhatsApp
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  // Thay số điện thoại của quán bạn vào đây (định dạng quốc tế, bỏ số 0 đầu)
  // Ví dụ: 84987654321 (Việt Nam) hoặc 4915123456789 (Đức)
  const phoneNumber = "064039795778"; 
  
  // Link mở nhanh WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Xin chào, tôi muốn đặt bàn!`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" // Mở tab mới
      rel="noopener noreferrer" // Bảo mật
      className="floating-whatsapp-btn"
      title="Chat với chúng tôi qua WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;