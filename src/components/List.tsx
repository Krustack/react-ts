import { type ReactNode } from "react";

type ListProps = {
  children: ReactNode;
};

function List({ children }: ListProps) {
  return (
    <ul
      style={{ margin: 16, display: "flex", flexDirection: "column", gap: 8 }}
    >
      {children}
    </ul>
  );
}
export default List;
