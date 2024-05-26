import { useState } from "react";
import Modal from "react-modal"; //import npm i react-modal
import "./modal.scss";
import axios from "axios";
import React from "react";
import closeBtnImg from "../../assets/Icons/close-24px.svg";
import { useNavigate } from "react-router-dom";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        top: "35%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
    },
};

Modal.setAppElement("#root");

function DeleteModal(props) {
    const navigate = useNavigate();
    console.log(props.name);
    const close = () => {
        console.log("closed");
        props.closeModal();
    };

    const deleteItem = async () => {
        console.log(`deleting id ${props.id}`);
        props.closeModal();
        try {
            let inventoryOrWarehouse = "warehouses";
            if (props.page != "warehouses") inventoryOrWarehouse = "inventory";

            const targetURL = `http://localhost:8080/api/${inventoryOrWarehouse}/${props.id}`;
            console.log(targetURL);
            const response = await axios.delete(targetURL);
            refreshPage();
        } catch (error) {
            console.log(error);
        }
    };
    const refreshPage = () => {
        navigate(0);
    };
    return (
        <div>
            <Modal isOpen={props.modalIsOpen} style={customStyles}>
                <div className="modal">
                    <div className="modal__container">
                        <section>
                            <div className="modal__right-justify">
                                <button
                                    onClick={close}
                                    className="modal__close-button"
                                >
                                    <img src={closeBtnImg} />
                                </button>
                            </div>
                            <h1>
                                Delete {props.name}{" "}
                                {props.page == "inventory"
                                    ? "inventory"
                                    : "warehouse"}
                                ?
                            </h1>
                            <div>
                                Please confirm that you’d like to delete{" "}
                                {props.name.toLowerCase()} from the list of{" "}
                                {props.page == "inventory"
                                    ? "inventories"
                                    : "warehouses"}
                                . You won’t be able to undo this action.
                            </div>
                        </section>
                        <section className="modal__buttons-row modal__right-justify">
                            <button onClick={close} className="modal__button">
                                Cancel
                            </button>
                            <button
                                onClick={deleteItem}
                                className="modal__delete modal__button"
                            >
                                Delete
                            </button>
                        </section>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteModal;
