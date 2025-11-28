import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { foodList, categories } from '../../data/foodData';
import { FaFilePdf } from 'react-icons/fa'; // Import Icon PDF cho đẹp
import './MenuPage.css';

// --- IMPORT FILE PDF CỦA BẠN ---
import pdfFile from '../../assets/Menu/taobao-web.pdf'; // Đảm bảo đường dẫn đúng

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;

  // --- LOGIC TÍNH TOÁN (Giữ nguyên) ---
  const filteredProducts = selectedCategory === 'all'
    ? foodList
    : foodList.filter(product => product.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // --- HÀM XỬ LÝ SỰ KIỆN ---
  const handleCategoryChange = (catId) => {
    setIsLoading(true);
    setSelectedCategory(catId);
    setCurrentPage(1);

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 700);
  };

  const paginate = (pageNumber) => {
    setIsLoading(true);
    setCurrentPage(pageNumber);
    
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  return (
    <div className="main-content container">
      
      {/* --- [MỚI] KHUNG CHỨA TIÊU ĐỀ & NÚT PDF --- */}
      <div className="page-header-container">
        <h2 className="page-title text-center text-danger fw-bold">SPEISEKARTE</h2>
        
        {/* Nút PDF nằm góc phải */}
        <a 
          href={pdfFile} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-pdf-header"
        >
          <FaFilePdf size={18} /> 
          <span>PDF Menu</span>
        </a>
      </div>
      {/* ------------------------------------------- */}

      {/* Category Bar */}
      <div className="category-wrapper">
        <div className="category-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* --- PHẦN HIỂN THỊ SẢN PHẨM (Giữ nguyên) --- */}
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Lädt...</p>
        </div>
      ) : (
        <div className="product-grid fade-in">
          {currentItems.length > 0 ? (
            currentItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center w-100">Gericht nicht gefunden.</p>
          )}
        </div>
      )}

      {/* Phân trang */}
      {!isLoading && totalPages > 1 && (
        <div className="pagination-container">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="page-btn prev-btn">&laquo;</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)} className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}>{index + 1}</button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="page-btn next-btn">&raquo;</button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;