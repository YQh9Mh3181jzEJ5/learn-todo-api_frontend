import {
  Box,
  Button,
  Center,
  CheckboxGroup,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./components/Task";

type Tasks = {
  name: string;
  isDone: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [name, setName] = useState<string>("");

  const fetch = async () => {
    const response = await axios.get("http://localhost:3010/tasks");

    setTasks(response.data);
  };

  const createTask = async () => {
    await axios.post("http://localhost:3010/tasks", {
      name: name,
      is_done: false,
    });
    setName("");
    fetch();
  };

  const toggleIsDone = (index: number) => {
    const tasksCopy = [...tasks];
    tasksCopy[index].isDone = !tasksCopy[index].isDone;
    setTasks(tasksCopy);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Box>
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">
              タスク一覧
            </Text>
          </Box>
          <Flex mb="24px">
            <Input
              placeholder="タスク名を入力"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Box ml="16px">
              <Button colorScheme="teal" onClick={createTask}>
                タスクを作成
              </Button>
            </Box>
          </Flex>
          <CheckboxGroup>
            {tasks.map((task, index) => (
              <Task
                key={index}
                index={index}
                name={task.name}
                isDone={task.isDone}
                toggleIsDone={toggleIsDone}
              />
            ))}
          </CheckboxGroup>
        </Box>
      </Center>
    </Box>
  );
};

export default App;
