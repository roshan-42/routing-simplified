import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <h2>This is Contact page.</h2>;
      <input type="text" />
      <input type="text" />
      <Link to="/">Home</Link>
    </>
  );
}
export default Contact;
