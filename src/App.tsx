import { Box, Center, CheckboxGroup, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./components/Task";

type Tasks = {
  name: string;
  isDone: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const fetch = async () => {
    const response = await axios.get("http://localhost:3010/tasks");
    console.log(response);
    setTasks(response.data);
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
