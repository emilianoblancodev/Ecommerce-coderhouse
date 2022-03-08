import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import ILContainer from "./components/ILContainer/ILContainer";
import { Item } from "./components/ILContainer/Item";

import Navigation from "./components/Navigation/Navigation";
import { products } from "./components/ILContainer/products";


function App() {
  return (
    <div className="App">
        <Navigation />
        <ILContainer />
       
    </div>
  );
}

export default App;
