import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function Admin() {
  return (
    <>
      <h1 className="text-center mt-5">Admin Panel</h1>
      <main style={{ marginTop: "20px" }} className="text-center">
        <div className="container d-flex justify-content-center">
          <form>
            <div className="mb-3">
              <label htmlFor="hospital" className="form-label">
                اسم المستشفى
              </label>
              <input type="text" className="form-control" id="hospital" />
            </div>
            <div className="mb-3">
              <label htmlFor="BloodType" className="form-label">
                فئة الدم
              </label>
              <select className="form-select">
                <option selected>All</option>
                <option>A+</option>
                <option value="Aneg">A-</option>
                <option value="Bpos">B+</option>
                <option value="Bneg">B-</option>
                <option value="ABpos">AB+</option>
                <option value="ABneg">AB-</option>
                <option value="Opos">O+</option>
                <option value="Oneg">O-</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="bloodno" className="form-label">
                عدد الوحدات
              </label>
              <input type="number" className="form-control" id="bloodno" />
            </div>
            <button type="submit" className="btn btn-primary">
              تسليم
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Admin;
