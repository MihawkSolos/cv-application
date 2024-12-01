import '../styles/Experience.css';
import { useState } from 'react';

export function Experience() {
    const [experience, setExperience] = useState({
        company: '',
        title: '',
        desc: '',
        startDate: '',
        endDate: '',
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form's default submission behavior
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="experienceContainer">
            <div className="titleContainer">
                <h5>Work Experience</h5>
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="inputsContainer">
                    <div className="inputContainer">
                        <label htmlFor="company">Company:</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="amazon"
                            value={experience.company}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={experience.startDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="endDate">End Date:</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={experience.endDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="software developer"
                            value={experience.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="desc">Role & Responsibilities:</label>
                        <textarea
                            id="desc"
                            name="desc"
                            value={experience.desc}
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
                    <p className="company">
                        <b>Company:</b> {experience.company}
                    </p>
                    <p className="startDate">
                        <b>Start Date:</b> {experience.startDate}
                    </p>
                    <p className="endDate">
                        <b>End Date:</b> {experience.endDate}
                    </p>
                    <p className="title">
                        <b>Title:</b> {experience.title}
                    </p>
                    <p className="desc">
                        <b>Responsibilities:</b> {experience.desc}
                    </p>

                    <div className="btnContainer">
                        <button className="editBtn" onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
