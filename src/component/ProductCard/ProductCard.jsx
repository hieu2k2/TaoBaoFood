import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // <--- 1. Thêm dòng này
import { FaSearchPlus, FaTimes, FaFilePdf } from 'react-icons/fa';
import './ProductCard.css';

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  
  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  }

  // Nội dung của Modal
  const modalContent = (
    <div className="image-modal-overlay" onClick={closeModal}>
      <span className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </span>
      <div className="modal-image-container" onClick={(e) => e.stopPropagation()}>
         <img src={product.image} alt={product.name} className="modal-image-full" />
         <h4 className="modal-product-title">{product.name}</h4>
         {product.price && <p className="modal-product-price">{product.price}</p>}
      </div>
    </div>
  );

  return (
    <>
      <div className="product-card">
        {/* ... (Giữ nguyên phần hiển thị Card như cũ) ... */}
        <div className="image-wrapper clickable" onClick={openModal}>
          <img src={product.image} alt={product.name} className="product-image" />
          {product.sold > 100 && <span className="badge-best-seller">Hot</span>}
          <div className="hover-overlay">
            <FaSearchPlus className="zoom-icon" />
            <span>Vergrößern</span>
          </div>
        </div>

        <div className="card-content">
          <h3 className="product-title text-center">{product.name}</h3>
          {product.price && <p className="product-price">{product.price}</p>}
          {product.pdfUrl && (
            <div className="pdf-button-container">
              <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-view-pdf" onClick={(e) => e.stopPropagation()}>
                <FaFilePdf className="pdf-icon" /> Xem Chi Tiết
              </a>
            </div>
          )}
        </div>
      </div>

      {/* --- 2. SỬA ĐOẠN NÀY: Dùng Portal để đưa Modal ra ngoài --- */}
      {showModal && ReactDOM.createPortal(
        modalContent,
        document.body // Gắn modal thẳng vào thẻ body của HTML
      )}
    </>
  );
}

export default ProductCard;