import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { runTestGroup } from 'api/infernoApiService';
import React, { FC } from 'react';
import useStyles from './styles';

export interface InputsModalProps {
  testGroupId: string;
  inputs: string[];
  modalVisible: boolean;
  testSessionId: string;
  hideModal: () => void;
}

const InputsModal: FC<InputsModalProps> = ({
  testSessionId,
  testGroupId,
  inputs,
  modalVisible,
  hideModal,
}) => {
  const styles = useStyles();

  function createTestRun(): void {
    runTestGroup(testSessionId, testGroupId, [])
      .then((result: string) => {
        console.log(result);
        hideModal();
      })
      .catch((e) => {
        console.log(e);
        hideModal();
      });
  }

  const inputFields = inputs.map((requirement: string, index: number) => {
    return (
      <ListItem key={`requirement${index}`}>
        <TextField id={`requirement${index}_input`} fullWidth label={requirement} />
      </ListItem>
    );
  });
  return (
    <Dialog open={modalVisible}>
      <DialogTitle>Sequence Inputs</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out required fields in order to run the sequence.
        </DialogContentText>
        <List>{inputFields}</List>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => hideModal()}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => createTestRun()}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputsModal;
