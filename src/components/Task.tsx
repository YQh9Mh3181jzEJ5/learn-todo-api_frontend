import { Box, Checkbox, Text } from "@chakra-ui/react";

type TasksProps = {
  name: string;
};

const Task = (props: TasksProps) => {
  return (
    <Box mb="16px">
      <Checkbox colorScheme="blue" size="lg">
        <Text>{props.name}</Text>
      </Checkbox>
    </Box>
  );
};

export default Task;
