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
import React, { FC } from 'react';
import useStyles from './styles';

export interface SequenceRequirement {
  label: string;
}

export interface RadioSequenceRequirement extends SequenceRequirement {
  values: string[];
}

export interface RequirementsModalProps {
  requirements: SequenceRequirement[];
  modalVisible: boolean;
  hideModal: () => void;
}

function requirementIsARadio(
  requirement: SequenceRequirement
): requirement is RadioSequenceRequirement {
  return 'values' in requirement;
}
const RequirementsModal: FC<RequirementsModalProps> = ({
  requirements,
  modalVisible,
  hideModal,
}) => {
  const styles = useStyles();
  const requirementFields = requirements.map((requirement: SequenceRequirement) => {
    if (requirementIsARadio(requirement)) {
      const requirementOptions = requirement.values.map((option: string) => {
        return <FormControlLabel value={option} control={<Radio />} label={option} />;
      });
      return (
        <ListItem className={styles.radioGroup}>
          <FormLabel component="legend">{requirement.label}</FormLabel>
          <RadioGroup row>{requirementOptions}</RadioGroup>
        </ListItem>
      );
    } else {
      return (
        <ListItem>
          <TextField fullWidth label={requirement.label} />
        </ListItem>
      );
    }
  });
  return (
    <Dialog open={modalVisible}>
      <DialogTitle>Sequence Inputs</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out required fields in order to run the sequence.
        </DialogContentText>
        <List>{requirementFields}</List>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => hideModal()}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => hideModal()}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequirementsModal;
