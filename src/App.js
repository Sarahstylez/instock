import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/Warehouse/Warehouse";
import InventoryDetailsCard from "../src/components/ItemDetailsCard/ItemDetailsCard";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Navigation />}
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<InventoryDetailsCard />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
