import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/allUser"
        );
        setData(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map((items, index) => (
        <div key={index}>{items.username} </div>
      ))}
    </div>
  );
};

export default Admin;
