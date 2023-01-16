import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Obat = () => {
  const [tbl_obat, setObat] = useState([]);
 
  useEffect(() => {
    getObat();
  }, []);
 
  const getObat = async () => {
    const response = await axios.get("http://localhost:5000/tbl_obat");
    setObat(response.data);
  };
 
  const deleteObat= async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tbl_obat/${id}`);
      getObat();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama_obat</th>
              <th>tgl_kadaluarsa</th>
              <th>jumlah</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tbl_obat.map((db_obat, index) => (
              <tr key={db_obat.id}>
                <td>{index + 1}</td>
                <td>{db_obat.nama_obat}</td>
                <td>{db_obat.tgl_kadaluarsa}</td>

                <td>{db_obat.jumlah}</td>

                <td>
                  <Link
                    to={`edit/${db_obat.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteObat(db_obat.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Obat;