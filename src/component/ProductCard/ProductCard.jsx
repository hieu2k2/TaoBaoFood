import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import { FaSearchPlus, FaTimes, FaFilePdf } from 'react-icons/fa';
import './ProductCard.css';

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  // STATE LỰA CHỌN:
  // Nếu món có options -> Mặc định chọn cái đầu tiên (index 0)
  // Nếu không -> null
  const [selectedOption, setSelectedOption] = useState(
    product.options && product.options.length > 0 ? product.options[0] : null
  );

  const openModal = () => setShowModal(true);
  
  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  }

  // Hàm xử lý khi khách chọn A, B, C...
  const handleOptionChange = (e) => {
    e.stopPropagation(); // Chặn click lan ra ngoài
    const optionId = e.target.value;
    const newOption = product.options.find(opt => opt.id === optionId);
    setSelectedOption(newOption);
  };

  // Tính toán giá để hiển thị:
  // Có option thì lấy giá của option, không thì lấy giá gốc
  const currentPrice = selectedOption ? selectedOption.price : product.price;
  
  // Tính toán tên để hiển thị trong Modal (kèm option nếu có)
  const modalTitle = selectedOption 
    ? `${product.name} (${selectedOption.label})` 
    : product.name;

  // Nội dung Modal (Được đưa ra ngoài bằng Portal)
  // Nội dung Modal
  const modalContent = (
    <div className="image-modal-overlay" onClick={closeModal}>
      <span className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </span>
      <div className="modal-image-container" onClick={(e) => e.stopPropagation()}>
         <img src={product.image} alt={product.name} className="modal-image-full" />
         
         {/* --- SỬA Ở ĐÂY: Dùng modalTitle thay vì product.name --- */}
         <h4 className="modal-product-title">{modalTitle}</h4> 
         
         {/* Nếu đã dùng modalTitle rồi thì có thể bỏ đoạn <p> hiển thị label bên dưới đi cho đỡ lặp lại, hoặc giữ nguyên tùy bạn */}
         
         {currentPrice && <p className="modal-product-price">{currentPrice}</p>}
      </div>
    </div>
  );

  return (
    <>
      <div className="product-card">
        {/* --- 1. ẢNH SẢN PHẨM --- */}
        <div className="image-wrapper clickable" onClick={openModal}>
          <img src={product.image} alt={product.name} className="product-image" />
          {product.sold > 100 && <span className="badge-best-seller">Hot</span>}
          <div className="hover-overlay">
            <FaSearchPlus className="zoom-icon" />
            <span>Vergrößern</span>
          </div>
        </div>

        {/* --- 2. NỘI DUNG & OPTIONS --- */}
        <div className="card-content">
          <h3 className="product-title text-center">{product.name}</h3>
          
          {/* [LOGIC MỚI] Menu thả xuống chọn A, B, C */}
          {product.options && (
            <div className="option-selector">
              <select 
                className="custom-select" 
                value={selectedOption.id}
                onChange={handleOptionChange}
                onClick={(e) => e.stopPropagation()}
              >
                {product.options.map(opt => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Hiển thị giá (Giá sẽ thay đổi khi chọn option) */}
          {currentPrice && <p className="product-price">{currentPrice}</p>}
          
          {product.pdfUrl && (
            <div className="pdf-button-container">
              <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-view-pdf" onClick={(e) => e.stopPropagation()}>
                <FaFilePdf className="pdf-icon" /> Xem Chi Tiết
              </a>
            </div>
          )}
        </div>
      </div>

      {/* --- 3. PORTAL MODAL --- */}
      {showModal && ReactDOM.createPortal(
        modalContent,
        document.body 
      )}
    </>
  );
}

export default ProductCard;