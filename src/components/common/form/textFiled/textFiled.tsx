import { FC } from "react";

import { STextField } from "./textFiled.style";

type TextFieldProps = {
  placeholder?: string;
  type?: string;
  name: string;
  value: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextField: FC<TextFieldProps> = ({
  placeholder,
  type = "text",
  name,
  onChange,
  value,
  autoFocus,
}) => {
  return (
    <STextField>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </STextField>
  );
};
