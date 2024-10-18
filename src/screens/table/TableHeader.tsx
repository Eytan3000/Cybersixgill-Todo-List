import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { TaskData } from '../../types';
import { Box } from '@mui/joy';
import { Filter } from '../../components/Filter';

export default function TableHeader({
  headerGroups,
}: {
  headerGroups: HeaderGroup<TaskData>[];
}) {
  return (
    <Box component="thead">
      {headerGroups.map((headerGroup) => (
        <Box component="tr" key={headerGroup.id}>
          {headerGroup.headers.map((header) =>
            header.id === 'priority' || header.id === 'assignee' ? (
              <Box
                sx={{
                  padding: 1,
                  borderBottom: '2px solid #ccc',
                  cursor: header.column.getCanSort() ? 'pointer' : '',
                }}
                component="th"
                key={header.id}>
                <Box
                  className={header.column.getCanSort() ? 'cursor-pointer' : ''}
                  onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(
                    // flexRender - enables rende of simple value (eg. string) or component
                    header.column.columnDef.header,
                    header.getContext() // getContext - allow access data and utilities specific to the current header's column.
                  )}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted() as string] ?? null}
                </Box>
                {header.column.getCanFilter() ? (
                  <div>
                    <Filter column={header.column} />
                  </div>
                ) : null}
              </Box>
            ) : (
              <Box
                component="th"
                key={header.id}
                sx={{ padding: 1, borderBottom: '2px solid #ccc' }}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Box>
            )
          )}
        </Box>
      ))}
    </Box>
  );
}
