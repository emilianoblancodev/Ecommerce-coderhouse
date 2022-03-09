import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Cart from './components/Cart/Cart.jsx'
import ShopPage from "./components/ShopPage/ShopPage.jsx"
import Intro from "./components/Intro/Intro.jsx"
import ILContainer from "./components/ILContainer/ILContainer";
import ItemDetail from './components/ItemDetail/ItemDetail.jsx'
import { Item } from "./components/ILContainer/Item";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from "./components/Navigation/Navigation";
import { products } from "./components/ILContainer/products";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navigation />
        <Routes>
            <Route path="/AboutMePage" element={<AboutMePage />}  />
            <Route path="/ContactPage" element={<ContactPage />}  />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ItemDetailContainer" element={<ItemDetailContainer />} />

            <Route path="/" element={<ILContainer />} />
            </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
