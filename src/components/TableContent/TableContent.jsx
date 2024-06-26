import "./TableContent.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";

import Tags from "../Tags/Tags";

import { Link } from "react-router-dom";

const WarehouseTableContent = ({ listItem }) => (
    <>
        <div className="mobile-warehouse">
            <div className="mobile-warehouse-title">WAREHOUSE</div>
            <Link to={`/warehouses/${listItem.id}`}>
                <div className="list-table__name">
                    <h3>{listItem.warehouse_name}</h3>
                    <img
                        className="list-table__icon"
                        src={chevronIcon}
                        alt="chevron icon"
                    />
                </div>
            </Link>
        </div>
        <div className="mobile-add">
            <div className="mobile-add-title">ADDRESS</div>
            <div className="list-table__add">
                {listItem.address} {listItem.city}, {listItem.country}
            </div>
        </div>
        <div className="mobile-contact-name">
            <div className="mobile-contact-name-title">CONTACT NAME</div>
            <div className="list-table__contact-name">
                {listItem.contact_name}
            </div>
        </div>
        <div className="mobile-contact-info">
            <div className="mobile-contact-info-title">CONTACT INFORMATION</div>
            <div className="list-table__contact-info">
                <p>{listItem.contact_phone}</p>
                <p>{listItem.contact_email}</p>
            </div>
        </div>
    </>
);

const WarehouseInventoryTableContent = ({ listItem }) => (
    <>
        <div className="mobile-item">
            <div className="mobile-item-title">INVENTORY ITEM</div>
            <Link to={`/inventory/${listItem.id}`}>
                <div className="list-table__name">
                    <h3>{listItem.item_name}</h3>
                    <img src={chevronIcon} alt="chevron icon" />
                </div>
            </Link>
        </div>
        <div className="mobile-category">
            <div className="mobile-category-title">CATEGORY</div>
            <div>{listItem.category}</div>
        </div>
        <div className="mobile-status">
            <div className="mobile-status-title">STATUS</div>
            <Tags status={listItem.status} />
        </div>
        <div className="mobile-quantity">
            <div className="mobile-quantity-title">QTY</div>
            <div>{listItem.quantity}</div>
        </div>
    </>
);

const InventoryTableContent = ({ listItem }) => (
    <>
        <div className="mobile-item">
            <div className="mobile-item-title">INVENTORY ITEM</div>
            <Link to={`/inventory/${listItem.id}`}>
                <div className="list-table__name">
                    <h3>{listItem.item_name}</h3>
                    <img src={chevronIcon} alt="chevron icon" />
                </div>
            </Link>
        </div>
        <div className="mobile-category">
            <div className="mobile-category-title">CATEGORY</div>
            <div>{listItem.category}</div>
        </div>
        <div className="mobile-status">
            <div className="mobile-status-title">STATUS</div>
            <Tags status={listItem.status} />
        </div>
        <div className="mobile-quantity">
            <div className="mobile-quantity-title">QTY</div>
            <div>{listItem.quantity}</div>
        </div>
        <div className="mobile-spacing"></div>
        <div className="mobile-warehouse">
            <div className="mobile-warehouse-title">WAREHOUSE</div>
            <div>{listItem.warehouse_name}</div>
        </div>
    </>
);

const TableContent = ({ page, listItem }) => {
    //Modal
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            {page === "warehouses" && (
                <WarehouseTableContent listItem={listItem} />
            )}
            {page === "inventory" && (
                <InventoryTableContent listItem={listItem} />
            )}
            {page !== "inventory" && page !== "warehouses" && (
                <WarehouseInventoryTableContent listItem={listItem} />
            )}

            <div className="list-table__actions-delete mobile-actions-delete">
                <img
                    className="list-table__delete"
                    src={deleteIcon}
                    alt="delete item"
                    onClick={openModal}
                />
            </div>

            <div className="list-table__actions-edit mobile-actions-edit">
                <Link
                    to={
                        page === "warehouses"
                            ? `/warehouses/${listItem.id}/edit`
                            : `/inventory/${listItem.id}/edit`
                    }
                >
                    <img
                        className="list-table__edit"
                        src={editIcon}
                        alt="edit item"
                    />
                </Link>
            </div>
            {modalIsOpen ? (
                <DeleteModal
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    id={listItem.id}
                    name={
                        listItem.item_name
                            ? listItem.item_name
                            : listItem.warehouse_name
                    }
                    page={page}
                    class="parent-modal"
                />
            ) : (
                ``
            )}
        </>
    );
};

export default TableContent;
