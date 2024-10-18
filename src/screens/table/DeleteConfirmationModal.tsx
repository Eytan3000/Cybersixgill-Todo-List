import {
  Modal,
  ModalDialog,
  DialogTitle,
  Divider,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/joy';
import { SetStateAction } from 'react';

interface DeleteConfirmationModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  deleteRow: (rowIndex: number) => void;
  idToDelete: number;
}
export default function DeleteConfirmationModal({
  open,
  setOpen,
  deleteRow,
  idToDelete,
}: DeleteConfirmationModalProps) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>Confirmation</DialogTitle>
        <Divider />
        <DialogContent>
          Are you sure you want to discard this task?
        </DialogContent>
        <DialogActions>
          <Button
            variant="solid"
            color="danger"
            onClick={() => {
              deleteRow(idToDelete);
              setOpen(false);
            }}>
            Discard task
          </Button>
          <Button
            variant="plain"
            color="neutral"
            onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
}
