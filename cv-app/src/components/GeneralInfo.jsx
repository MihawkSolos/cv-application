import '../styles/GeneralInfo.css'
import {useState} from 'react'

export function GeneralInfo () {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        setIsEditing(false);
    }

    const handleEdit = (e) => {
        setIsEditing(true);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setGeneralInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }))
    }
      

    return (
    <>
        <div className="generalContainer">

            <div className="generalTitle">
                <h5>General Information</h5>
            </div>

            {isEditing ? (
                <div className="inputsContainer">
                <div className="firstNameContainer inputContainer">
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                    type='text' 
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
                    type='text' 
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
                    type='mail' 
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
                    type='phoneNumber' 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="(000)000-0000" 
                    value={generalInfo.phoneNumber}
                    onChange={handleInputChange}
                    required 
                    />
                </div>
            </div>
            ) : (
                <div className="displayContainer">
                    <p className="fullName"><b>Name:</b>
                        {"  " + generalInfo.firstName + ' ' + generalInfo.lastName}
                    </p>
                    <p className="email"><b>Email:</b>
                        {"  " + generalInfo.email}
                    </p>
                    <p className="phoneNumber"><b>Phone Number:</b>
                        {"  " + generalInfo.phoneNumber}
                    </p>
                </div>
            )}


            <div className="btnContainer">
                {isEditing ? (
                    <button 
                    class='submitBtn' 
                    type="button"
                    onClick={handleSubmit}
                    >Submit</button>
                ) : 
                (
                    <button 
                    class='editBtn' 
                    type="button"
                    onClick={handleEdit}
                    >Edit</button>
                )}
            </div>
        </div>
    </>
    )
}
