import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import styles from "./Form.module.css"

type FormProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"form">;
function Form({ children, ...props }: FormProps) {
  return <form {...props} className={styles.form}>{children}</form>;
}
export default Form;
