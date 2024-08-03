import Doctor from "../models/Doctor.js";

const generateId = async () => {
    let id;
    let idExists = true;
    while (idExists) {
        id = Math.floor(1 + Math.random() * 10);
        const existingId = await Doctor.findOne({ id });
        if (!existingId) {
            idExists = false;
        }
    }
    return id;
};

const DoctorService = {
    RegisterDoctor: async (details) => {
        const { name, age, email, mobilenumber, address, specialization, experience, fee, description, workingdays, workinghours, image } = details;
        try {
            const existingDoctor = await Doctor.findOne({ email });
            if (existingDoctor) {
                return { status: 409, message: 'Email already exists.' };
            }
            const id = await generateId();
            const newDoctor = new Doctor({ id, name, age, email, mobilenumber, address, specialization, experience, fee, description, workingdays, workinghours, image });
            await newDoctor.save();
            return { status: 201, message: 'Doctor registered successfully.' };
        } catch (error) {
            return { status: 500, message: 'Error registering doctor.' };
        }
    },
    GetDoctors: async () => {
        try {
            return await Doctor.find({});
        } catch (error) {
            throw error;
        }
    },
    UpdateDoctor: async (doctorId, updateData) => {
        try {
            const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, updateData, { new: true });
            if (!updatedDoctor) {
                return { status: 404, message: 'Doctor not found.' };
            }
            return { status: 200, message: 'Doctor updated successfully.', updatedDoctor };
        } catch (error) {
            return { status: 500, message: 'Error updating doctor.' };
        }
    },
    DeleteDoctor: async (doctorId) => {
        try {
            const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
            if (!deletedDoctor) {
                return { status: 404, message: 'Doctor not found.' };
            }
            return { status: 200, message: 'Doctor deleted successfully.', deletedDoctor };
        } catch (error) {
            return { status: 500, message: 'Error deleting doctor.' };
        }
    }
};

export default DoctorService;

