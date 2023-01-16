import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddObat = () => {
  const [nama_obat, setName] = useState("");
  const navigate = useNavigate();
 
  const saveObat = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/tbl_obat", {
        nama_obat,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveObat}>
          <div className="field">
            <label className="label">nama_obat</label>

            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_obat}
                onChange={(e) => setName(e.target.value)}
                placeholder="nama_obat"
              />
            </div>
          </div>


          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddObat;