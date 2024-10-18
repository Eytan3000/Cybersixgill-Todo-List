import DOMPurify from 'dompurify';
import DumbForm from './DumbForm';
import { SignInFormElement, TaskData } from '../../types';
import { PRIORITIES, PRIORITY_HIGH } from '../../data';
import { generateId } from '../../helperFunctions';

export default function CreateForm({
  addTask,
}: {
  addTask: (data: TaskData) => void;
}) {
  const data: TaskData = {
    id: '-1',
    task: '',
    assignee: '',
    priority: PRIORITY_HIGH,
  };

  function handleSubmit(event: React.FormEvent<SignInFormElement>) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    // Sanitize
    data.task = DOMPurify.sanitize(
      (formElements.namedItem('task') as HTMLInputElement).value
    );
    data.assignee = DOMPurify.sanitize(
      (formElements.namedItem('assignee') as HTMLInputElement).value
    );

    const prioritiesIndex = (
      formElements.namedItem('priority') as HTMLSelectElement
    )[1].value;

    data.priority = PRIORITIES[prioritiesIndex - 1];
    data.id = (formElements.namedItem('task') as HTMLInputElement).value = '';
    (formElements.namedItem('assignee') as HTMLInputElement).value = '';
    data.id = generateId();

    addTask(data);
  }

  return <DumbForm handleSubmit={handleSubmit} alert={''} data={data} />;
}
