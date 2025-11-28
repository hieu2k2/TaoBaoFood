import React, { useState, useEffect } from 'react'; // Nhớ import useEffect
import { useNavigate } from 'react-router-dom'; 
import './Header.css'; 

// Import file PDF

function Header() {
    const navigate = useNavigate(); 
    const [isLoading, setIsLoading] = useState(false); 

    // --- LOGIC MỚI: ẨN/HIỆN MENU KHI CUỘN ---
    const [showHeader, setShowHeader] = useState(true); // Mặc định là hiện
    const [lastScrollY, setLastScrollY] = useState(0);  // Lưu vị trí cuộn cũ

    useEffect(() => {
        const controlNavbar = () => {
            // Nếu cuộn xuống (current > last) thì ẩn header
            if (window.scrollY > lastScrollY && window.scrollY > 100) { 
                setShowHeader(false); 
            } else { 
                // Nếu cuộn lên hoặc ở đỉnh trang thì hiện header
                setShowHeader(true);  
            }
            // Cập nhật vị trí cuộn mới
            setLastScrollY(window.scrollY); 
        };

        window.addEventListener('scroll', controlNavbar);

        // Dọn dẹp sự kiện khi component bị hủy
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    // ----------------------------------------

    const handleNavClick = (e, path) => {
        e.preventDefault(); 
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show'); 
        }
        setIsLoading(true); 
        setTimeout(() => {
            setIsLoading(false); 
            navigate(path); 
            window.scrollTo(0, 0); 
        }, 3000);
    };

    

    return (
        <>
            {isLoading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}

            {/* Thêm class điều kiện: nếu showHeader=false thì thêm class 'nav-hidden' */}
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top shadow-sm custom-navbar ${showHeader ? 'nav-visible' : 'nav-hidden'}`}>
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/" onClick={(e) => handleNavClick(e, '/')}>
                        <h2 className="logo">TAOBAO</h2>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, '/')}>
                                    Startseite
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/menu" onClick={(e) => handleNavClick(e, '/menu')}>
                                    Speiseplan
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
                                    Kontakt
                                </a>
                            </li>
                        </ul>                   
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;