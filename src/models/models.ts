export enum Result {
  Success,
  Failure,
  Skipped,
  None,
}

export interface Test {
  title: string;
  result: Result;
}

export interface TestSequence {
  id: string;
  tests: Test[];
  title: string;
  description: string;
  result: Result;
}

export interface TestGroup {
  id: string;
  test_sequences: TestSequence[];
}

export interface TestSuite {
  title: string;
  id: string;
  test_groups?: TestGroup[];
}

export interface TestSession {
  id: string;
  test_suite?: TestSuite;
  test_suite_id: string;
}
