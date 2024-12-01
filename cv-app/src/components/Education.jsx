import '../styles/Education.css';
import { useState } from 'react';

export function Education() {
    const [education, setEducation] = useState({
        school: '',
        degree: '',
        major: '',
        startDate: '',
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="educationContainer">
            <div className="titleContainer">
                <h5>School Experience</h5>
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="inputsContainer">
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
                        <label htmlFor="major">Major:</label>
                        <input
                            type="text"
                            name="major"
                            id="major"
                            value={education.major}
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

                    <div className="btnContainer">
                        <button className="submitBtn" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <div className="displayContainer">
                    <p className="school">
                        <b>School:</b> {education.school}
                    </p>
                    <p className="degree">
                        <b>Degree:</b> {education.degree}
                    </p>
                    <p className="major">
                        <b>Major:</b> {education.major}
                    </p>
                    <p className="startDate">
                        <b>Start Date:</b> {education.startDate}
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
