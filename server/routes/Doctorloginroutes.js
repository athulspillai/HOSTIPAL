import express from 'express';
import DoctorController from '../controllers/Doctorlogin.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


router.post('/register', upload.single('image'), DoctorController.RegisterDoctor);
router.get('/doctors', DoctorController.GetDoctors);
router.put('/update/:id', upload.single('image'), DoctorController.UpdateDoctor);
router.delete('/delete/:id', DoctorController.DeleteDoctor);

export default router