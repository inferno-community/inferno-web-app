import React, { FC, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import useStyles from './styles';
import {
  Collapse,
  IconButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tab,
  Tabs,
} from '@material-ui/core';
import { Result, TestGroup } from 'models/testSuiteModels';
import { green, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { RedoOutlined } from '@material-ui/icons';
import TabPanel from './TabPanel';

export function getIconFromResult(result: Result | undefined): JSX.Element {
  if (result) {
    switch (result.result) {
      case 'pass':
        return <CheckIcon style={{ color: green[500] }} />;
      case 'fail':
        return <CancelIcon style={{ color: red[500] }} />;
      case 'skip':
        return <RedoOutlined />;
      case 'omit':
        return <Fragment />;
      default:
        return <Fragment />;
    }
  } else {
    return <Fragment />;
  }
}

interface TestGroupProps extends TestGroup {
  alternateRow?: boolean;
  testSessionId: string;
  showInputsModal: (testGroupId: string, inputs: string[]) => void;
}

const TestGroupComponent: FC<TestGroupProps> = ({
  alternateRow,
  title,
  test_groups,
  result,
  inputs,
  id,
  testSessionId,
  showInputsModal,
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

  function getAllContainedInputs(): string[] {
    let all_inputs: string[] = inputs;
    test_groups.forEach((subGroup) => {
      all_inputs = all_inputs.concat(getInputsRecursive(subGroup));
    });
    return all_inputs;
  }

  function getInputsRecursive(testGroup: TestGroup): string[] {
    let inputs = testGroup.inputs;
    testGroup.test_groups.forEach((subGroup) => {
      inputs = inputs.concat(getInputsRecursive(subGroup));
    });
    return inputs;
  }

  function runSequnce(): void {
    const inputs = getAllContainedInputs();
    if (inputs.length === 0) {
      return;
    } else {
      showInputsModal(id, inputs);
    }
  }

  let subGroups: JSX.Element | null = null;
  let expandButton: JSX.Element | null = null;
  if (test_groups.length > 0) {
    subGroups = (
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
          <List>
            {test_groups.map((subGroup: TestGroup, index: number) => (
              <TestGroupComponent
                {...subGroup}
                alternateRow={index % 2 === 1}
                key={`tg-${subGroup.id}`}
                testSessionId={testSessionId}
                showInputsModal={showInputsModal}
              />
            ))}
          </List>
        </TabPanel>
        <TabPanel currentPanelIndex={panelIndex} index={1}>
          Http requests here
        </TabPanel>
        <TabPanel currentPanelIndex={panelIndex} index={2}>
          About Page
        </TabPanel>
      </Collapse>
    );

    expandButton = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <Fragment>
      <ListItem
        className={alternateRow ? styles.testListItemAlternateRow : ''}
        button={(test_groups.length > 0) as true}
        onClick={handleClick}
      >
        <ListItemIcon className={styles.testIcon}>{getIconFromResult(result)}</ListItemIcon>
        <ListItemText primary={title} />
        {expandButton}
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => runSequnce()}>
            <PlayArrowIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {subGroups}
    </Fragment>
  );
};

export default TestGroupComponent;
