import React, { useState } from 'react';
import './Doctorregister.css';
import axios from 'axios';

function Doctorregister() {
    const [details, setDetails] = useState({
        name: '',
        age: '',
        email: '',
        mobilenumber: '',
        address: '',
        specialization: '',
        experience: '',
        fee: '',
        description: '',
        workingdays: '',
        workinghours: '',
        image: null 
    });

    const [registerMessage, setRegisterMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setDetails({
            ...details,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in details) {
            formData.append(key, details[key]);
        }
        try {
            const response = await axios.post('http://localhost:8000/doctor/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setRegisterMessage(response.data.message);
        } catch (error) {
            setRegisterMessage('Error registering doctor.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={details.age}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Mobile Number:
                    <input
                        type="text"
                        name="mobilenumber"
                        value={details.mobilenumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={details.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Specialization:
                    <input
                        type="text"
                        name="specialization"
                        value={details.specialization}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Experience:
                    <input
                        type="number"
                        name="experience"
                        value={details.experience}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Fee:
                    <input
                        type="number"
                        name="fee"
                        value={details.fee}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={details.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Working Days:
                    <input
                        type="text"
                        name="workingdays"
                        value={details.workingdays}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Working Hours:
                    <input
                        type="text"
                        name="workinghours"
                        value={details.workinghours}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <button type="submit">Register</button>
            </form>
            {registerMessage && <p>{registerMessage}</p>}
        </div>
    );
}

export default Doctorregister;




