import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/Warehouse/Warehouse";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryDetailsCard from "../src/components/ItemDetailsCard/ItemDetailsCard";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {/* Wrap all routes in container to apply overlay style to all pages*/}
        <div className="App__routes-overlay">
          <Routes>
            <Route path="/" element={<WarehousePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/:id" element={<InventoryDetailsCard />} />
            <Route path="/warehouses" element={<WarehousePage />} />
            <Route path="/warehouses/:id" element={<WarehouseDetails />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
