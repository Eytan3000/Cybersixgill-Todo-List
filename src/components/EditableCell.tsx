import { Input } from '@mui/joy';
import { useEffect, useState } from 'react';
import { CellProps, TaskData } from '../types';

export default function EditableCell({
  getValue,
  row,
  column,
  table,
}: CellProps<TaskData>) {
  const initialValue = getValue() as string;
  const [value, setValue] = useState(initialValue);

  const { updateData } = table.options.meta as {
    updateData: (rowIndex: number, columnId: string, newValue: string) => void;
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => updateData(row.index, column.id, value);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      variant="plain"
      size="sm"
    />
  );
}
