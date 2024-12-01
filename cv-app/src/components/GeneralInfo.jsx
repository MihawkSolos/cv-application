import '../styles/GeneralInfo.css';
import { useState } from 'react';

export function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="generalContainer">
            <div className="generalTitle">
                <h5>General Information</h5>
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="inputsContainer">
                    <div className="firstNameContainer inputContainer">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Mohammed"
                            value={generalInfo.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="lastNameContainer inputContainer">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Ali"
                            value={generalInfo.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="emailContainer inputContainer">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@google.com"
                            value={generalInfo.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="telContainer inputContainer">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="(000)000-0000"
                            value={generalInfo.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="btnContainer">
                        <button className="submitBtn" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <div className="displayContainer">
                    <p className="fullName">
                        <b>Name:</b> {generalInfo.firstName} {generalInfo.lastName}
                    </p>
                    <p className="email">
                        <b>Email:</b> {generalInfo.email}
                    </p>
                    <p className="phoneNumber">
                        <b>Phone Number:</b> {generalInfo.phoneNumber}
                    </p>

                    <div className="btnContainer">
                        <button
                            className="editBtn"
                            type="button"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
