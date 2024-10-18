import { Box, Button, Sheet } from '@mui/joy';
import { useState } from 'react';
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  SortingFn,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import { CellProps, TaskData } from '../../types.ts';
import EditableCell from '../../components/EditableCell.tsx';
import PriorityCell from '../../components/PriorityCell.tsx';
import TableHeader from './TableHeader.tsx';
import TableRow from './TableRow.tsx';
import EditFormModal from './EditFormModal.tsx';
import DeleteConfirmationModal from './DeleteConfirmationModal.tsx';
import { initEditingData } from '../../data.ts';

const sortPriorityFn: SortingFn<TaskData> = (rowA, rowB) => {
  const priorityA = rowA.original.priority;
  const priorityB = rowB.original.priority;
  return priorityA.id - priorityB.id;
};

const HeaderWithGap = (title: string) => (
  <div style={{ width: title === 'Task' ? '400px' : '' }}>
    {title}
    <div style={{ height: '30px' }} />
  </div>
);

export default function Table({
  tableData,
  updateRow,
  updateData,
  deleteRow,
}: {
  tableData: TaskData[];
  updateRow: (rowIndex: number, newRow: TaskData) => void;
  updateData: (rowIndex: number, columnId: string, value: string) => void;
  deleteRow: (rowIndex: number) => void;
}) {
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [idToDelete, setIdToDelete] = useState(-1);
  const [editingData, setEditingData] = useState(initEditingData);

  function handleEditClick(props: CellProps<TaskData>) {
    const index = Number(props.row.id);
    const row = props.row.original;
    setEditingData({
      index,
      ...row,
    });

    setOpenEditForm(true);
  }

  function handleDeleteClick(props: CellProps<TaskData>) {
    setIdToDelete(Number(props.row.id));
    setOpenWarning(true);
  }

  const columns = [
    {
      accessorKey: 'task',
      header: () => HeaderWithGap('Task'),
      cell: EditableCell,
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      cell: EditableCell,
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      sortingFn: sortPriorityFn,
      cell: PriorityCell,
    },
    {
      accessorKey: 'edit',
      header: () => HeaderWithGap(''),
      cell: (props: CellProps<TaskData>) => (
        <Button
          variant="plain"
          color="primary"
          onClick={() => handleEditClick(props)}>
          Edit
        </Button>
      ),
    },
    {
      accessorKey: 'delete',
      header: () => HeaderWithGap(''),
      cell: (props: CellProps<TaskData>) => (
        <Button
          variant="plain"
          color="danger"
          onClick={() => handleDeleteClick(props)}>
          Delete
        </Button>
      ),
    },
  ];

  const tableOptions = {
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData,
      deleteRow,
    },
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    sortingFns: {
      sortPriorityFn,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(), // generate unique values for select filter/autocomplete
  } as TableOptions<TaskData>;

  const table = useReactTable(tableOptions);

  return (
    <>
      <Box p={3} display="flex" flexDirection="column" gap={2}>
        <Sheet variant="outlined" sx={{ p: 2, borderRadius: 'md' }}>
          <Box
            component="table"
            width="100%"
            sx={{ borderCollapse: 'collapse' }}>
            <TableHeader headerGroups={table.getHeaderGroups()} />
            <Box component="tbody">
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.original.id} row={row} />
              ))}
            </Box>
          </Box>
        </Sheet>
      </Box>

      <EditFormModal
        open={openEditForm}
        setOpen={setOpenEditForm}
        editingData={editingData}
        updateRow={updateRow}
      />

      <DeleteConfirmationModal
        open={openWarning}
        setOpen={setOpenWarning}
        deleteRow={deleteRow}
        idToDelete={idToDelete}
      />
    </>
  );
}
