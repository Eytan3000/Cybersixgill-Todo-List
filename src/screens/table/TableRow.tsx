import { Box } from '@mui/joy';
import { Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { TaskData } from '../../types';

export default function TableRow({ row }: { row: Row<TaskData> }) {
  return (
    <Box component="tr" key={row.original.id}>
      {row.getVisibleCells().map((cell) => {
        return (
          <Box
            component="td"
            key={cell.id}
            sx={{ padding: 1, borderBottom: '1px solid #ccc' }}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Box>
        );
      })}
    </Box>
  );
}
