import React, { FC } from "react";
import { SCheckbox, SCheckboxContainer, SText } from "./checkboxField.style";

type CheckboxFieldProps = {
  name: string;
  onChange: (id: number) => void;
  checked: boolean;
  label: string;
  inputId: number;
  size?: number;
};

export const CheckboxField: FC<CheckboxFieldProps> = ({
  onChange,
  label,
  checked,
  inputId,
  name,
  size = 16,
}) => {
  return (
    <SCheckboxContainer>
      <SCheckbox
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => onChange(inputId)}
        size={size}
      />
      {label && <SText checked={checked}>{label}</SText>}
    </SCheckboxContainer>
  );
};
