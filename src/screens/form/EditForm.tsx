import { FormEvent, SetStateAction } from 'react';
import DumbForm from './DumbForm';
import DOMPurify from 'dompurify';
import { SignInFormElement, TaskData } from '../../types';
import { PRIORITIES } from '../../data';

interface EditFormProps {
  data: TaskData & { index: number };
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  updateRow: (rowIndex: number, newRow: TaskData) => void;
}

export default function EditForm({ data, setOpen, updateRow }: EditFormProps) {
  function handleSubmit(event: FormEvent<SignInFormElement>) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const task = DOMPurify.sanitize(formElements.task.value);
    const assignee = DOMPurify.sanitize(formElements.assignee.value);

    const prioritiesIndex = (
      formElements.namedItem('priority') as HTMLSelectElement
    )[1].value;

    const priority = PRIORITIES[prioritiesIndex - 1];

    updateRow(data.index, { id: data.id, task, assignee, priority });
    setOpen(false);
  }

  return <DumbForm handleSubmit={handleSubmit} alert={''} data={data} />;
}
