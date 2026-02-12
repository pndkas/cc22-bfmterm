import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerValidator } from "../validators/register.validator";

function Register() {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };
  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    setError({});
    const result = registerValidator.safeParse(formData);
    if (!result.success) {
      const { fieldErrors } = result.error.flatten();
      console.log(fieldErrors);
      setError(fieldErrors);
      return;
    }

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );
      console.log("Register successfully", res.data);
      toast.success("ลงทะเบียนสำเร็จ!");
      navigate("/post");
    } catch (error) {
      console.log("เกิดข้อผิดพลาด");
      toast.error("ลงทะเบียนล้มเหลว");
    }
  };

  console.log("error", error);
  return (
    <div className="text-xs font-semibold min-h-screen flex justify-center items-center">
      <form className="flex flex-col" onSubmit={hdlSubmit}>
        <p className="text-xl text-purple-600">CREATE ACCOUNT</p>
        <label htmlFor="" name="username">
          USERNAME:
        </label>
        <input
          className="border"
          type="text"
          name="username"
          placeholder="USERNAME"
          onChange={hdlChange}
          value={formData.username}
        />
        {error.username && <p className="text-red-500">{error.username[0]}</p>}

        <label htmlFor="" name="password">
          PASSWORD:
        </label>
        <input
          className="border"
          type="password"
          name="password"
          placeholder="PASSWORD"
          onChange={hdlChange}
          value={formData.password}
        />
        {error.password && <p className="text-red-500">{error.password[0]}</p>}

        <label htmlFor="" name="email">
          EMAIL:
        </label>
        <input
          className="border"
          type="text"
          name="email"
          placeholder="EMAIL"
          onChange={hdlChange}
          value={formData.email}
        />
        {error.email && <p className="text-red-500">{error.email[0]}</p>}

        <label htmlFor="" name="phone">
          PHONE:
        </label>
        <input
          className="border"
          type="number"
          name="phone"
          placeholder="0XXXXXXXXX"
          onChange={hdlChange}
          value={formData.phone}
        />
        {error.phone && <p className="text-red-500">{error.phone[0]}</p>}

        <button className="px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full border border-transparent bg-black text-gray-500 hover:text-purple-600 hover:bg-purple-50 mt-5 cursor-pointer">
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Register;
