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
  const requirementFields = requirements.map((requirement: SequenceRequirement, index: number) => {
    if (requirementIsARadio(requirement)) {
      const requirementOptions = requirement.values.map((option: string, optionIndex: number) => {
        return (
          <FormControlLabel
            key={`requirement${index}_option${optionIndex}`}
            value={option}
            control={<Radio id={`requirement${index}_option${optionIndex}_radio`} />}
            label={option}
            htmlFor={`requirement${index}_option${optionIndex}_radio`}
            id={`requirement${index}_option${optionIndex}`}
          />
        );
      });
      return (
        <ListItem key={`requirement${index}`} className={styles.radioGroup}>
          <FormLabel component="label">{requirement.label}</FormLabel>
          <RadioGroup row id={`requirement${index}_radiogroup`}>
            {requirementOptions}
          </RadioGroup>
        </ListItem>
      );
    } else {
      return (
        <ListItem key={`requirement${index}`}>
          <TextField id={`requirement${index}_input`} fullWidth label={requirement.label} />
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
