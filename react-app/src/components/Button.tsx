import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClickBtn: () => void;
}

const Button = ({ children, onClickBtn, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickBtn}>
      {children}
    </button>
  );
};

export default Button;
