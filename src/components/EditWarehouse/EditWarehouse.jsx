import "./EditWarehouse.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../FormFields/WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../FormFields/ContactDetailsForm/ContactDetailsForm";

function EditWarehouse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: "",
    });

    const [activeField, setActiveField] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Fetch the existing warehouse data
        const fetchWarehouseData = async () => {
            try {
                console.log(id);
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/api/warehouses/${id}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error(
                    "There was an issue fetching the warehouse data:",
                    error
                );
            }
        };
        fetchWarehouseData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === "contact_phone") {
            formattedValue = formatPhoneNumber(value);
        }

        setFormData({
            ...formData,
            [name]: formattedValue,
        });
        validateInput(name, formattedValue);
    };

    const handleFocus = (name) => {
        setActiveField(name);
    };

    const handleBlur = (name) => {
        setActiveField(null);
        validateInput(name, formData[name]);
    };

    const validateInput = (name, value) => {
        let error = "";
        if (!value) {
            error = "This field is required";
        } else {
            switch (name) {
                case "contact_email":
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    error = !emailPattern.test(value)
                        ? "Valid email is required"
                        : "";
                    break;
                case "contact_phone":
                    const parsedPhoneNumber = parsePhoneNumberFromString(
                        value,
                        "US"
                    );
                    error =
                        !parsedPhoneNumber || !parsedPhoneNumber.isValid()
                            ? "Valid phone number is required"
                            : "";
                    break;
                default:
                    break;
            }
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const formatPhoneNumber = (phoneNumber) => {
        const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, "US");
        if (parsedPhoneNumber) {
            return parsedPhoneNumber.formatInternational();
        }
        return phoneNumber;
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to cancel?")) {
            window.history.back();
        }
    };

    const handleBackClick = () => {
        window.history.back();
    };

    const handleSaveClick = async (e) => {
        e.preventDefault();

        if (window.confirm("Are you ready to save?")) {
            let valid = true;
            const newErrors = {};

            Object.keys(formData).forEach((key) => {
                if (!formData[key]) {
                    newErrors[key] = "This field is required";
                    valid = false;
                } else {
                    validateInput(key, formData[key]);
                    if (errors[key]) {
                        valid = false;
                    }
                }
            });

            setErrors(newErrors);

            if (valid) {
                try {
                    console.log(`${process.env.REACT_APP_API_URL}/api/warehouses/${id}`);
                    const response = await fetch(
                        `${process.env.REACT_APP_API_URL}/api/warehouses/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }

                    const data = await response.json();
                    console.log("Form submitted successfully:", data);

                    navigate("/warehouses");
                } catch (error) {
                    console.error(
                        "There was an issue with the form submission:",
                        error
                    );
                }
            }
        }
    };

    return (
        <section className="card">
            <div className="card__title">
                <div className="card__title-container">
                    <button
                        className="backbutton__link"
                        onClick={handleBackClick}
                    >
                        <img
                            className="card__icon-arrow"
                            src={BackArrow}
                            alt="Back to Warehouse List Page"
                        />
                    </button>
                    <h1>Edit Warehouse</h1>
                </div>
            </div>
            <div className="forms">
                <div className="forms__container">
                    <WarehouseDetailsForm
                        formData={formData}
                        handleChange={handleChange}
                        handleFocus={handleFocus}
                        handleBlur={handleBlur}
                        activeField={activeField}
                        errors={errors}
                    />
                    <ContactDetailsForm
                        formData={formData}
                        handleChange={handleChange}
                        handleFocus={handleFocus}
                        handleBlur={handleBlur}
                        activeField={activeField}
                        errors={errors}
                    />
                </div>
                <div className="form__ctas">
                    <button
                        className="form__ctas-cancel"
                        type="button"
                        onClick={handleCancelClick}
                    >
                        <h3>Cancel</h3>
                    </button>
                    <button
                        className="form__ctas-edit"
                        type="button"
                        onClick={handleSaveClick}
                    >
                        <h3>Save</h3>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default EditWarehouse;