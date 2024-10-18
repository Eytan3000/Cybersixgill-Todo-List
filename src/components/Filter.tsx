import { Select, Option } from '@mui/joy';
import { Column } from '@tanstack/react-table';
import React from 'react';
import { PRIORITIES } from '../data';
import { TaskData } from '../types.ts';
import { getPriorityColor } from '../helperFunctions.ts';

export function Filter({ column }: { column: Column<TaskData, unknown> }) {
  const sortedUniqueValues = React.useMemo(
    () =>
      Array.from(column.getFacetedUniqueValues().keys()).sort().slice(0, 5000),
    [column.getFacetedUniqueValues()]
  );

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    column.setFilterValue(newValue);
  };

  return (
    <Select onChange={handleChange} size="sm" defaultValue={''}>
      <Option value="">All</Option>

      {column.id === 'priority'
        ? PRIORITIES.map((priority) => (
            <Option key={priority.id} value={priority}>
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
          ))
        : sortedUniqueValues.map((value) => (
            <Option value={value} key={value}>
              {value}
            </Option>
          ))}
    </Select>
  );
}
