import "../css/Profile.css";
import React, { useState } from "react";
import FormikForm from "./FormikForm";

// change this data to the database one
function Profile() {
  const [fields, updateFields] = useState({
    firstName: "Bilal",
    lastName: "Idris",
    userName: "Bilal Idris",
    email: "bilal@authwiki.com"
  });

  return (
    <div className="container">
      <div className="side">Side bar here</div>
      <div className="main_data">
        <FormikForm fields={fields} updateFields={updateFields} />
      </div>
    </div>
  );
}

export default Profile;
