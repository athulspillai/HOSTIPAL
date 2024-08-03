import  { useState, useEffect } from 'react';
import './Doctordetails.css';
import axios from 'axios';
import { Modal, Button, Form, Table } from 'react-bootstrap';

function Doctordetails() {
    const [doctors, setDoctors] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editDoctor, setEditDoctor] = useState(null);
    const [deleteDoctorId, setDeleteDoctorId] = useState(null);
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

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:8000/doctor/doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleEdit = (doctor) => {
        setEditDoctor(doctor._id);
        setDetails({
            name: doctor.name,
            age: doctor.age,
            email: doctor.email,
            mobilenumber: doctor.mobilenumber, 
            address: doctor.address, 
            specialization: doctor.specialization, 
            experience: doctor.experience,
            fee: doctor.fee, 
            description: doctor.description, 
            workingdays: doctor.workingdays, 
            workinghours: doctor.workinghours, 
            image: doctor.image
        });
        setShowEditModal(true);
    };

    const handleDeleteClick = (doctorId) => {
        setDeleteDoctorId(doctorId);
        setShowDeleteModal(true);
    };

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in details) {
            formData.append(key, details[key]);
        }
        try {
             await axios.put(`http://localhost:8000/doctor/update/${editDoctor}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setShowEditModal(false);
            fetchDoctors();
        } catch (error) {
            console.error('Error updating doctor:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/doctor/delete/${deleteDoctorId}`);
            setShowDeleteModal(false);
            fetchDoctors();
        } catch (error) {
            console.error('Error deleting doctor:', error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Fee</th>
                        <th>Description</th>
                        <th>Working Days</th>
                        <th>Working Hours</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor._id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.age}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.mobilenumber}</td>
                            <td>{doctor.address}</td>
                            <td>{doctor.specialization}</td>
                            <td>{doctor.experience}</td>
                            <td>{doctor.fee}</td>
                            <td>{doctor.description}</td>
                            <td>{doctor.workingdays}</td>
                            <td>{doctor.workinghours}</td>
                            <td>
                                <img
                                    src={`http://localhost:8000/uploads/images/${doctor.image}`}
                                    alt={doctor.name}
                                    width="100"
                                />
                            </td>
                            <td>
                                <button onClick={() => handleEdit(doctor)}>Edit</button>
                                <button onClick={() => handleDeleteClick(doctor._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={details.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                name="age"
                                value={details.age}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={details.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="mobilenumber"
                                value={details.mobilenumber}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={details.address}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control
                                type="text"
                                name="specialization"
                                value={details.specialization}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                name="experience"
                                value={details.experience}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fee</Form.Label>
                            <Form.Control
                                type="number"
                                name="fee"
                                value={details.fee}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={details.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Working Days</Form.Label>
                            <Form.Control
                                type="text"
                                name="workingdays"
                                value={details.workingdays}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Working Hours</Form.Label>
                            <Form.Control
                                type="text"
                                name="workinghours"
                                value={details.workinghours}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this doctor?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Doctordetails;

