import React from "react";
import './form-input.scss'
export default function FormInput({ onChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
