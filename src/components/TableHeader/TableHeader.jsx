import "./TableHeader.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";

const warehouseHeaders = [
    {
        key: "warehouse_name",
        label: "WAREHOUSE",
        className: "list-table__sort-name",
    },
    { key: "address", label: "ADDRESS", className: "list-table__sort-add" },
    {
        key: "contact_name",
        label: "CONTACT NAME",
        className: "list-table__sort-contact-name",
    },
    {
        key: "contact_phone",
        label: "CONTACT INFORMATION",
        className: "list-table__sort-contact-info",
    },
];

const warehouseInventoryHeaders = [
    {
        key: "item_name",
        label: "INVENTORY ITEM",
        className: "list-table__sort-item",
    },
    {
        key: "category",
        label: "CATEGORY",
        className: "list-table__sort-category",
    },
    { key: "status", label: "STATUS", className: "list-table__sort-status" },
    {
        key: "quantity",
        label: "QTY",
        className: "list-table__sort-quantity",
    },
];

const inventoryHeaders = [
    {
        key: "item_name",
        label: "INVENTORY ITEM",
        className: "list-table__sort-item",
    },
    {
        key: "category",
        label: "CATEGORY",
        className: "list-table__sort-category",
    },
    { key: "status", label: "STATUS", className: "list-table__sort-status" },
    {
        key: "quantity",
        label: "QTY",
        className: "list-table__sort-quantity",
    },
    {
        key: "warehouse_name",
        label: "WAREHOUSE",
        className: "list-table__sort-warehouse-name",
    },
];

const TableHeader = ({ page, sortItems, listClassName }) => {
    // const headers = page === "warehouses" ? warehouseHeaders : inventoryHeaders;
    const headers =
        page === "warehouses"
            ? warehouseHeaders
            : page === "inventory"
            ? inventoryHeaders
            : warehouseInventoryHeaders;

    return (
        <li className={`${listClassName} --sort-header`}>
            {headers.map((header) => (
                <div
                    key={header.key}
                    onClick={() => sortItems(header.key)}
                    className={header.className}
                >
                    {header.label}
                    <img className="sort-icon" src={sortIcon} alt="sort icon" />
                </div>
            ))}
            <div className="list-table__sort-actions">ACTIONS</div>
        </li>
    );
};

export default TableHeader;
