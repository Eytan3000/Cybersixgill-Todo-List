import { Select, Option } from '@mui/joy';
import { PRIORITIES } from '../data';
import { CellProps, Priority, TaskData } from '../types';
import { getPriorityColor } from '../helperFunctions';

export default function PriorityCell({
  getValue,
  row,
  column,
  table,
}: CellProps<TaskData>) {
  const currentPriority = getValue() as Priority | null;

  const { updateData } = table.options.meta as {
    updateData: (
      rowIndex: number,
      columnId: string,
      newValue: Priority
    ) => void;
  };

  return (
    <Select
      value={currentPriority}
      variant="plain"
      sx={{
        background: currentPriority ? getPriorityColor(currentPriority.id) : '',
      }}>
      {PRIORITIES.map((priority) => (
        <Option
          onClick={() => updateData(row.index, column.id, priority)}
          key={priority.id}
          value={priority}>
          <div
            style={{
              height: '7px',
              width: '7px',
              background: getPriorityColor(priority.id),
              borderRadius: '2px',
            }}
          />
          {priority.name.toUpperCase()}
        </Option>
      ))}
    </Select>
  );
}
