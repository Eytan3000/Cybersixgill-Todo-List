import { Alert, Button, Select, Option } from '@mui/joy';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { FormEvent } from 'react';
import { TaskData, SignInFormElement } from '../../types';
import { PRIORITIES } from '../../data';

const nameLabel = 'Task';
const assigneeLabel = 'assignee';
const priorityLabel = 'Priority';
const buttonText = 'Submit';

interface DumbFormProps {
  handleSubmit: (e: FormEvent<SignInFormElement>) => void;
  data: TaskData;
  alert: string;
}

export default function DumbForm({ handleSubmit, data, alert }: DumbFormProps) {
  const task = data.task;
  const assignee = data.assignee;
  const priority = data.priority;

  return (
    <>
      <Stack
        gap={2}
        sx={{
          width: '20rem',
          border: '0.5px solid #bababa',
          pt: 4,
          px: 5,
          pb: 5,
          borderRadius: '10px',
        }}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
          onSubmit={handleSubmit}>
          <FormControl required>
            <FormLabel>{nameLabel}</FormLabel>
            <Input
              defaultValue={task}
              variant="outlined"
              type="text"
              name="task"
            />
          </FormControl>
          <FormControl required>
            <FormLabel>{assigneeLabel}</FormLabel>
            <Input defaultValue={assignee} type="text" name="assignee" />
          </FormControl>

          <FormControl required>
            <FormLabel>{priorityLabel}</FormLabel>
            <Select defaultValue={priority.id} name="priority">
              {PRIORITIES.map((priority) => (
                <Option key={priority.id} value={priority.id}>
                  {priority.name.toUpperCase()}
                </Option>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" sx={{ width: '100%', mt: 4 }}>
            {buttonText}
          </Button>
          {alert !== '' && <Alert>{alert}</Alert>}
        </form>
      </Stack>
    </>
  );
}
