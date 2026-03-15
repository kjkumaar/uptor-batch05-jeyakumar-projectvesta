import ResponsiveAppBar from "./Component/Header";
import SelectActionCard from "./Component/Content";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import MenGarments from "./Component/Pages/MenGarments";
import Women from "./Component/Pages/Women";
import ScrollToTop from "./Component/ScrollTop";
import Kids from "./Component/Pages/Kids";
import Silks from "./Component/Pages/Silks";
import Bridal from "./Component/Pages/Weddingwear";
import Belts from "./Component/Pages/Accessories";
import Cart from "./Component/Cart";



function App() {
  return (
   <div className="page-layout">
      <ResponsiveAppBar />

      <main className="content">
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<SelectActionCard />} />
            <Route path="/men" element={<MenGarments />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/Silks" element={<Silks />} />
            <Route path="/Weddingwear" element={<Bridal />} />
             <Route path="/Accessories" element={<Belts/>} />
             <Route path="/cart" element={<Cart />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;