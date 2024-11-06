import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  buttonStyle: "submit" | "normal" | "outline";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;
function Button({ buttonStyle, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`${styles.btn} ${styles[buttonStyle]} `}>
      {children}
    </button>
  );
}
export default Button;
