import DoctorService from "../services/Doctorlogin.js";

const DoctorController = {
    RegisterDoctor: async (req, res) => {
        try {
            const image = req.file ? req.file.filename : null; 
            const details = { ...req.body, image }; 
            const result = await DoctorService.RegisterDoctor(details);
            res.status(result.status).json({ message: result.message });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error registering doctor.' });
        }
    },
    GetDoctors: async (req, res) => {
        try {
            const doctors = await DoctorService.GetDoctors();
            res.status(200).json(doctors);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching doctors.' });
        }
    },
    UpdateDoctor: async (req, res) => {
        try {
            const doctorId = req.params.id;
            const updateData = { ...req.body };
            if (req.file) {
                updateData.image = req.file.filename;
            }
            const result = await DoctorService.UpdateDoctor(doctorId, updateData);
            res.status(result.status).json({ message: result.message });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating doctor.' });
        }
    },
    DeleteDoctor: async (req, res) => {
        try {
            const doctorId = req.params.id;
            const result = await DoctorService.DeleteDoctor(doctorId);
            res.status(result.status).json({ message: result.message });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting doctor.' });
        }
    }
};

export default DoctorController;

