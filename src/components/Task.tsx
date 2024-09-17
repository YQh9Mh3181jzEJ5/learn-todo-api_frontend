import { CloseIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Text } from "@chakra-ui/react";

type TaskProps = {
  id: number;
  name: string;
  isDone: boolean;
  index: number;
  toggleIsDone: (id: number, index: number) => void;
  destroyTask: (index: number) => void;
};

const Task = ({
  id,
  name,
  isDone,
  index,
  toggleIsDone,
  destroyTask,
}: TaskProps) => {
  return (
    <Flex mb="16px" justifyContent="space-between" alignItems="center">
      <Checkbox
        colorScheme="blue"
        size="lg"
        isChecked={isDone}
        onChange={() => {
          toggleIsDone(id, index);
        }}
      >
        <Text>{name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => destroyTask(id)} />
    </Flex>
  );
};

export default Task;
