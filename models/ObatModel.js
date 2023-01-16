import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Obat = db.define('nama_obat',{
    nama_obat: DataTypes.STRING,
    tgl_kadaluarsa: DataTypes.STRING,
    jumlah: DataTypes.STRING,


},{
    freezeTableName:true
});
 
export default Obat;
 
(async()=>{
    await db.sync();
})();