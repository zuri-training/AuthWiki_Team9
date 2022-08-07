import React from "react";

const ProfileForm = ({ labelText, name, value, handleChange }) => {
  return (
    <div className="input-item">
      <label htmlFor="" className="label-text">
        {labelText}
      </label>
      <input
        type="text"
        className="input-box"
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={name}
      />
    </div>
  );
};

export default ProfileForm;
