import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      
    }
    else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
     
    
    </div>
  );
};

export default Home;
