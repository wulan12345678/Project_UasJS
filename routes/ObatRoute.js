import express from "express";
import { 
    getObat,
    getObatById,
    createObat,
    updateObat,
    deleteObat 
} from "../controllers/ObatController.js";


const router = express.Router();
 
router.get('/tbl_obat', getObat);
router.get('/tbl_obat/:id', getObatById);
router.post('/tbl_obat', createObat);
router.patch('/tbl_obat/:id', updateObat);
router.delete('/tbl_obat/:id', deleteObat); 
export default router;