export interface Result {
  id: string;
  result: string;
  test_id: string;
  test_run_id: string;
  test_session_id: string;
}

export interface TestGroup {
  id: string;
  title: string;
  test_groups: TestGroup[];
  inputs: string[];
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
