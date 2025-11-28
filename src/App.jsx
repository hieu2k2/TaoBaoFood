import Footer from "./component/footer/Footer"
import { Routes, Route } from 'react-router-dom';
import Header from "./component/header/Header"
import Home from "./component/pages/Home"
import MenuPage from "./component/pages/MenuPage"
import Reservation from "./component/Reservation/Reservation";
import FloatingWhatsApp from "./component/FloatingWhatsApp/FloatingWhatsApp";
function App() {

  return (
    <>
      <Header /> 
      <FloatingWhatsApp />
      <div className="content">
        {/* KHU VỰC THAY ĐỔI NỘI DUNG */}
        <Routes>
          <Route path="/" element={<Home />} />           {/* Đường dẫn trang chủ */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Reservation />} />
             {/* Đường dẫn trang menu */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
