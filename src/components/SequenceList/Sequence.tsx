import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import TestList, { Test } from './TestList';
import useStyles from './styles';
import {
  Collapse,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tab,
  Tabs,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { green, red } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import TabPanel from './TabPanel';
import { SequenceRequirement } from '../RequirementsModal/RequirementsModal';

export interface SequenceProps {
  testList: Test[];
  title: string;
  description: string;
  result: SequenceResult;
  requirements: SequenceRequirement[];
  showRequirementsModal?: (requirements: SequenceRequirement[]) => void;
}

export enum SequenceResult {
  Success,
  Failure,
  Skipped,
  None,
}

const Sequence: FC<SequenceProps> = ({
  testList,
  title,
  description,
  result,
  requirements,
  showRequirementsModal,
}) => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [panelIndex, setPanelIndex] = React.useState(0);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setPanelIndex(newValue);
  };

  function runSequnce() {
    if (showRequirementsModal && requirements.length > 0) {
      showRequirementsModal(requirements);
    }
  }

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {result === SequenceResult.Success ? (
            <CheckIcon style={{ color: green[500] }} />
          ) : (
            <CancelIcon style={{ color: red[500] }} />
          )}
        </ListItemIcon>
        <ListItemText primary={title} secondary={description} />
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => runSequnce()}>
            <PlayArrowIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Tabs
          value={panelIndex}
          className={styles.tabs}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Test Results" />
          <Tab label="HTTP Requests" />
          <Tab label="About" />
        </Tabs>
        <TabPanel currentPanelIndex={panelIndex} index={0}>
          <TestList tests={testList}></TestList>
        </TabPanel>
        <TabPanel currentPanelIndex={panelIndex} index={1}>
          Http requests here
        </TabPanel>
        <TabPanel currentPanelIndex={panelIndex} index={2}>
          About Page
        </TabPanel>
      </Collapse>
    </div>
  );
};

export default Sequence;
