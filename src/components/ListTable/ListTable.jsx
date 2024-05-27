import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ListTable.scss";

import PageHeader from "../PageHeader/PageHeader";
import TableHeader from "../TableHeader/TableHeader";
import TableContent from "../TableContent/TableContent";

const ListTable = ({ page }) => {
    const [list, setList] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: "warehouse_name",
        direction: "ascending",
    });

    useEffect(() => {
        /* Fetch data from inventory or warehouses depending on page prop passed */
        const fetchData = async () => {
            try {
                console.log(`${process.env.REACT_APP_API_URL}/api/${page}`);
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/${page}`
                );
                setList(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [page]);

    const sortItems = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const sortedLists = [...list].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
    });

    // const listClassName = `list-table__list
    // ${page === "inventory" && " list-table__list--inventory"}
    // ${page === "warehouses" && " list-table__list--warehouses"}`;
    const listClassName = `list-table__list
    ${
        page === "warehouses"
            ? " list-table__list--warehouses"
            : " list-table__list--inventory"
    }`;
    return (
        <section>
            <PageHeader page={page} />
            <ul>
                <TableHeader
                    page={page}
                    sortItems={sortItems}
                    listClassName={listClassName}
                />
                {sortedLists.map((listItem) => (
                    <li className={listClassName} key={listItem.id}>
                        <TableContent page={page} listItem={listItem} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ListTable;
