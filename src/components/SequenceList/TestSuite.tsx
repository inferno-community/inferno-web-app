import React, { FC } from 'react';
import { TestSuite, TestGroup } from 'models/models';
import SequenceList from './SequenceList';

const TestSuiteComponent: FC<TestSuite> = ({ title, test_groups }) => {
  if (test_groups) {
    const testGroupList = test_groups.map((testGroup: TestGroup, index: number) => (
      <SequenceList {...testGroup} key={index} />
    ));

    return (
      <div>
        {title}
        {testGroupList}
      </div>
    );
  } else {
    return <div>{title}</div>;
  }
};

export default TestSuiteComponent;
