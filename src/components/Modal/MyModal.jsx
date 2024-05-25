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
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
    },
};

Modal.setAppElement("#root");

function MyModal(props) {
    const navigate = useNavigate();
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
                        <div className="modal__right-justify">
                            <button
                                onClick={close}
                                className="modal__close-button"
                            >
                                <img src={closeBtnImg} />
                            </button>
                        </div>
                        <h1>
                            Delete {props.name} {props.page}?
                        </h1>
                        <div>
                            Please confirm that you’d like to delete{" "}
                            {props.name} from the list of{" "}
                            {props.inventoryOrWarehouse}. You won’t be able to
                            undo this action.
                        </div>
                        <article className="modal__right-justify">
                            <button onClick={close}>CANCEL</button>
                            <button
                                onClick={deleteItem}
                                className="modal__delete"
                            >
                                DELETE
                            </button>
                        </article>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default MyModal;
