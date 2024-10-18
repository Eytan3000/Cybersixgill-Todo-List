import { Box, Divider, Typography } from '@mui/joy';
import CreateForm from './screens/form/CreateForm';
import { useState } from 'react';
import { TaskData } from './types.ts';
import { initTableData } from './data.ts';
import Table from './screens/table/Table.tsx';

const mainTitle = 'Todo List';
const create = 'Create new task';

function App() {
  const [tableData, setTableData] = useState<TaskData[]>(initTableData);

  function addTask(data: TaskData) {
    setTableData((prev) => {
      const updatedTableData = [...prev];
      updatedTableData.push(data);
      return updatedTableData;
    });
  }

  // Updates a specific cell in a row
  function updateData(rowIndex: number, columnId: string, value: string) {
    setTableData((prev) => {
      const updatedTableData = [...prev];
      const updatedRow = { ...updatedTableData[rowIndex], [columnId]: value };
      updatedTableData[rowIndex] = updatedRow;
      return updatedTableData;
    });
  }

  // Updates the entire row
  function updateRow(rowIndex: number, newRow: TaskData) {
    setTableData((prev) => {
      const updatedTableData = [...prev];
      updatedTableData[rowIndex] = { ...newRow };
      return updatedTableData;
    });
  }

  function deleteRow(rowIndex: number) {
    setTableData((prev) => {
      const prevCopy = [...prev];
      prevCopy.splice(rowIndex, 1);
      return prevCopy;
    });
  }

  return (
    <>
      <Box
        marginTop="5%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          flexDirection={'column'}>
          <Typography level="h1">{mainTitle}</Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Typography sx={{ my: 3 }} level="h4">
          {create}
        </Typography>
        <CreateForm addTask={addTask} />
        <Table
          tableData={tableData}
          updateData={updateData}
          updateRow={updateRow}
          deleteRow={deleteRow}
        />
      </Box>
    </>
  );
}

export default App;
