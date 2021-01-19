import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";
export default function FormInput({ onChange, label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={onChange} {...otherProps} />
      {label ? <FormInputLabel>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
}
