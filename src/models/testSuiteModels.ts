export enum Result {
  Success,
  Failure,
  Skipped,
  None,
}

export interface TestGroup {
  id: string;
  title: string;
  test_groups: TestGroup[];
  result?: Result;
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
