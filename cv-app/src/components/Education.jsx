import '../styles/Education.css'
import {useState} from 'react'

export function Education() {
    const [education, setEducation] = useState({
        school: '',
        degree: '',
        startDate: '',
    })

    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = () => {
        setIsEditing(false);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(value);
        setEducation((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }))
    }


    return (
        <>
        <div className="educationContainer">
            <div className="titleContainer">
                <h5>School Experience</h5>
            </div>

            {isEditing ? (
                <div className="inputsContainer">
                    <div className="inputContainer">
                        <label htmlFor="school">School Name:</label>
                            <input 
                            type="text"
                            name="school"
                            id="school"
                            value={education.school}
                            onChange={handleChange}
                            required
                             />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="degree">Degree Name:</label>
                            <input 
                            type="text"
                            name="degree"
                            id="degree"
                            value={education.degree}
                            onChange={handleChange}
                            required
                             />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="startDate">Start Date:</label>
                            <input 
                            type="date"
                            name="startDate"
                            id="startDate"
                            value={education.startDate} 
                            onChange={handleChange}
                            required
                             />
                    </div>
                </div>
                
            ) : (
                <div className="displayContainer">
                    <p className="school"><b>School:</b>
                        {"  " + education.school}
                    </p>
                    <p className="degree"><b>Degree:</b>
                        {"  " + education.degree}
                    </p>
                    <p className="startDate"><b>Start Date:</b>
                        {"  " + education.startDate}

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
