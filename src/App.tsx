import { type FormEvent, useRef, useState } from "react";
import Container from "./components/Container";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
import ListItem from "./components/ListItem";
export type ListType = {
  listName: string;
  isFinish: boolean;
  listId: string;
};
function App() {
  const [lists, setLists] = useState<ListType[]>([]);
  const inputList = useRef<HTMLInputElement>(null);
  function saveListHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newList = {
      listName: inputList.current!.value,
      isFinish: false,
      listId: new Date().toISOString(),
    };
    if (!newList.listName) {
      return;
    }
    setLists((preve: ListType[]) => [...preve, newList]);
    e.currentTarget.reset();
  }
  function finishHandler(listId: string) {
    const newLists = lists.map((list) => {
      if (list.listId === listId) {
        return { ...list, isFinish: true };
      }
      return list;
    });
    setLists(newLists);
  }
  return (
    <>
      <Container as="header">
        <h3>what do you want todo ?</h3>
      </Container>
      <Container as="main">
        <Form onSubmit={saveListHandler}>
          <Input id="list" label="addlist" type="text" ref={inputList} />
          <Button buttonStyle="submit">addlist</Button>
        </Form>
        <Container>
          <h3 className="title">TODO LIST :</h3>
          {lists.length === 0 && (
            <p className="no-list">please add todo list</p>
          )}
          <List>
            {lists.map((list) => {
              return (
                <ListItem
                  key={list.listId}
                  listName={list.listName}
                  isFinish={list.isFinish}
                  listId={list.listId}
                  onFinish={finishHandler}
                />
              );
            })}
          </List>
        </Container>
      </Container>
      <Container as="footer">
        Submitted by : Mr.Wisanu Phornjariyatham
      </Container>
    </>
  );
}

export default App;
