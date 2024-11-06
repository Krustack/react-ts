import { type ComponentPropsWithoutRef } from "react";
import Button from "./Button";
import styles from "./ListItem.module.css";
import { type ListType } from "../App";

type ListItemProps = ListType &
  ComponentPropsWithoutRef<"li"> & {
    onFinish: (id: string) => void;
  };
function ListItem({
  listName,
  listId,
  isFinish,
  onFinish,
  ...props
}: ListItemProps) {
  return (
    <li {...props} className={styles.item}>
      <p className={isFinish ? ` ${styles.finish} ` : ""}>{listName}</p>
      {!isFinish && (
        <Button
          buttonStyle="outline"
          onClick={() => {
            onFinish(listId);
          }}
        >
          finish
        </Button>
      )}
    </li>
  );
}
export default ListItem;
