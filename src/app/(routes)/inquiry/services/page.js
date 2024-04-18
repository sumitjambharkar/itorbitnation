"use client";
import config from "@/config";
import axios from "axios";
import React, { useState } from "react";
import Swal from 'sweetalert2';

const Page = () => {
  const [data, setData] = useState({
    fullName: "",
    number: "",
    location: "",
    course: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.fullName || !data.number || !data.course || !data.location) {
      Swal.fire({
        title: `Please fill all input value`,
        text: "You clicked the button!",
        icon: "error"
      });
    } else {
      try {
        await axios.post(`${config}/api/course`, {
          fullName: data.fullName,
          number: data.number,
          location: data.location,
          course: data.course,
          relation: "service",
        });
        setData({
          fullName: "",
          number: "",
          location: "",
          course: "",
        });
        Swal.fire({
          title: "Data added successfully",
          text: "You clicked the button!",
          icon: "success"
        });
      } catch (error) {
        console.error("Error adding data:", error);
        alert("Error adding data. Please try again.");
      }
    }
  };

  return (
    <div className="rr">
      <div className="formm">
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            value={data.fullName}
            onChange={handleChange}
            type="text"
            name="fullName"
            placeholder="Enter Your Full Name.."
          />

          <label>Mobile Number</label>
          <input
            value={data.number}
            onChange={handleChange}
            type="text"
            name="number"
            placeholder="Enter Your Mobile Number.."
          />

          <label>Location</label>
          <input
            value={data.location}
            onChange={handleChange}
            type="text"
            name="location"
            placeholder="Enter Your Location.."
          />

          <label>Services</label>
          <select value={data.course} onChange={handleChange} name="course">
            <option value="SEO">SEO</option>
            <option value="SMM">SMM</option>
            <option value="PPC">PPC</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Page;
