import "./TablesInventory.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

/* TODO update table and use GET API endpoint */
function TablesInventory() {
  const items = [
    {
      id: 9,
      warehouse_name: "Manhattan",
      item_name: "Television",
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: "Electronics",
      status: "In Stock",
      quantity: 500,
    },
    // Add more items here
  ];

  return (
    <>
      <div className="inventory__page">
        {/* Map through list and on click navigate item details page */}
        {items.map((item) => (
          <InventoryItem
            key={item.id}
            id={item.id} // Pass the id prop for navigation
            name={item.item_name}
            status={item.status}
            category={item.category}
            quantity={item.quantity}
            warehouse_name={item.warehouse_name}
          />
        ))}
      </div>
    </>
  );
}

export default TablesInventory;
