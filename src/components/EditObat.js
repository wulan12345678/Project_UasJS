import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditObat = () => {
  const [nama_obat, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getObatById();
  }, []);
 
  const updateObat = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/tbl_obat/${id}`, {
        nama_obat,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  const getObatById = async () => {
    const response = await axios.get(`http://localhost:5000/tbl_obat/${id}`);
    setName(response.data.name);
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateObat}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_obat}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditObat;