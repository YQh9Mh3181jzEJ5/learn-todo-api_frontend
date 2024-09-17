import { Box, Checkbox, Text } from "@chakra-ui/react";

type TaskProps = {
  name: string;
  isDone: boolean;
  index: number;
  toggleIsDone: (index: number) => void;
};

const Task = ({ name, isDone, index, toggleIsDone }: TaskProps) => {
  return (
    <Box mb="16px">
      <Checkbox
        colorScheme="blue"
        size="lg"
        isChecked={isDone}
        onChange={() => {
          toggleIsDone(index);
        }}
      >
        <Text>{name}</Text>
      </Checkbox>
    </Box>
  );
};

export default Task;
