import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <h2>This is Home page.</h2> ;<h1>For contact</h1>
      <a href="#" onClick={handleClick}>
        Click here
      </a>
    </>
  );
}
export default Home;
