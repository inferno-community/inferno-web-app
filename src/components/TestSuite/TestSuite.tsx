import React, { FC } from 'react';
import { TestSuite, TestGroup } from 'models/models';
import { Card, List, Typography } from '@material-ui/core';
import useStyles from './styles';
import TestGroupComponent from './TestGroup';

const TestSuiteComponent: FC<TestSuite> = ({ title, test_groups }) => {
  const styles = useStyles();

  if (test_groups) {
    const testGroupList = test_groups.map((testGroup: TestGroup, index: number) => (
      <Card className={styles.testGroupCard}>
        <List>
          <TestGroupComponent {...testGroup} key={index} />
        </List>
      </Card>
    ));

    return (
      <div className={styles.testSuite}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        {testGroupList}
      </div>
    );
  } else {
    return <div>{title}</div>;
  }
};

export default TestSuiteComponent;
