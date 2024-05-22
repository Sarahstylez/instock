import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/Warehouse/Warehouse";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header here */}
        <Routes>
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
