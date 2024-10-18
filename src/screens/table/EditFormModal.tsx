import { Modal, Sheet, ModalClose } from '@mui/joy';

import { TaskData } from '../../types.ts';
import EditForm from '../form/EditForm.tsx';
import { SetStateAction } from 'react';

interface EditFormModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  editingData: TaskData & { index: number };
  updateRow: (rowIndex: number, newRow: TaskData) => void;
}

export default function EditFormModal({
  open,
  setOpen,
  editingData,
  updateRow,
}: EditFormModalProps) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}>
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <EditForm setOpen={setOpen} data={editingData} updateRow={updateRow} />
      </Sheet>
    </Modal>
  );
}
