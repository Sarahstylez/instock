import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/Warehouse/Warehouse";
import EditItemPage from "./pages/EditItem/EditItem";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryDetailsCard from "../src/components/ItemDetailsCard/ItemDetailsCard";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import Footer from "./components/Footer/Footer";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Navigation />}


        <div className="App__routes-overlay">
          <Routes>
            <Route path="/" element={<WarehousePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/warehouses" element={<WarehousePage />} />
            <Route path="/inventory/new" element={<AddInventoryItem />} />
            <Route path="/warehouses/new" element={<AddWarehouse />} />
            <Route path="/inventory/:id" element={<InventoryDetailsCard />} />
            <Route path="/warehouses/:id" element={<WarehouseDetails />}
            <Route path="/inventory/:id/edit/" element={<EditItemPage />} />
            <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
