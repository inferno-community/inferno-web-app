import React, { FC } from 'react';
import { TestSuite, TestGroup } from 'models/testSuiteModels';
import { Card, List, Typography } from '@material-ui/core';
import useStyles from './styles';
import TestGroupComponent from './TestGroup';
import InputsModal from 'components/InputsModal/InputsModal';

export interface TestSuiteComponentProps extends TestSuite {
  testSessionId: string;
}

const TestSuiteComponent: FC<TestSuiteComponentProps> = ({ title, test_groups, testSessionId }) => {
  const styles = useStyles();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [inputs, setInputs] = React.useState<string[]>([]);
  const [testGroupId, setTestGroupId] = React.useState<string>('');

  function showInputsModal(testGroupId: string, inputs: string[]) {
    setInputs(inputs);
    setTestGroupId(testGroupId);
    setModalVisible(true);
  }

  if (test_groups) {
    const testGroupList = test_groups.map((testGroup: TestGroup, index: number) => (
      <Card className={styles.testGroupCard} key={`tgCard-${index}`}>
        <List>
          <TestGroupComponent
            {...testGroup}
            key={`tg-${testGroup.id}`}
            showInputsModal={showInputsModal}
            testSessionId={testSessionId}
          />
        </List>
      </Card>
    ));

    return (
      <div className={styles.testSuite}>
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
        {testGroupList}
        <InputsModal
          hideModal={() => setModalVisible(false)}
          modalVisible={modalVisible}
          testGroupId={testGroupId}
          testSessionId={testSessionId}
          inputs={inputs}
        />
      </div>
    );
  } else {
    return <div>{title}</div>;
  }
};

export default TestSuiteComponent;
