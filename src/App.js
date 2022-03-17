import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from './components/Footer/Footer.jsx'
import Cart from './components/Cart/Cart.jsx'
import ShopPage from "./components/ShopPage/ShopPage.jsx"
import ILContainer from "./components/ILContainer/ILContainer";
import ItemDetail from './components/ItemDetail/ItemDetail.jsx'
import { Item } from "./components/ILContainer/Item";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navigation from "./components/Navigation/Navigation";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from './context/CartContext.jsx'



function App() {
  return (

    <CartContextProvider>
      <BrowserRouter>
      <div className="App">
          <Navigation />
          
          <Routes>
              <Route path="/AboutMePage" element={<AboutMePage />}  />
              <Route path="/ContactPage" element={<ContactPage />}  />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="/categoria/:categoriaId" element={<ILContainer />} />
              <Route path="/categoria/:categoriaId" element={<ILContainer />} />
              <Route path="/" element={<ILContainer />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
      </div>
      </BrowserRouter>
    </CartContextProvider>
      
    
    
  );
}

export default App;
