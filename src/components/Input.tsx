import { type ComponentPropsWithoutRef, forwardRef } from "react";
import Container from "./Container";
import styles from "./Input.module.css";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
};
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref,
) {
  return (
    <Container className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} style={{ minWidth: 120 }} {...props} />
    </Container>
  );
});

export default Input;
