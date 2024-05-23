import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/Warehouse/Warehouse";
import EditItemPage from "./pages/EditItem/EditItem";
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
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/inventory/edit/:id" element={<EditItemPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
