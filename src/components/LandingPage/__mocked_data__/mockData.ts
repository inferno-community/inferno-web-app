import { TestSuite } from 'models/testSuiteModels';

export const mockedTestSuitesReturnValue: TestSuite[] = [
  { id: 'DemoIG_STU1::DemoSuite', title: 'Demonstration Suite' },
  { id: 'infra_test', title: 'Infrastructure Test' },
];

export const mockedPostTestSuiteResponse = {
  id: '14630ee6-0a81-4217-9811-119a98adc4f3',
  test_suite: {
    id: 'DemoIG_STU1::DemoSuite',
    test_groups: [
      {
        id: 'DemoIG_STU1::DemoSuite-Group01',
        test_groups: [
          {
            id: 'DemoIG_STU1::DemoSuite-Group01-DemoIG_STU1::DemoGroup',
            test_groups: [],
            title: 'Demo Group Instance 1',
          },
          {
            id: 'DemoIG_STU1::DemoSuite-Group01-Group02',
            test_groups: [],
            title: 'alsdasd',
          },
          {
            id: 'DemoIG_STU1::DemoSuite-Group01-ABC',
            test_groups: [],
            title: 'testst',
          },
        ],
        title: 'First Group',
      },
      {
        id: 'DemoIG_STU1::DemoSuite-Group02',
        test_groups: [
          {
            id: 'DemoIG_STU1::DemoSuite-Group02-DEF',
            test_groups: [],
            title: 'Demo Group Instance 2',
          },
          {
            id: 'DemoIG_STU1::DemoSuite-Group02-GHI',
            test_groups: [
              {
                id: 'DemoIG_STU1::DemoSuite-Group02-GHI-1',
                test_groups: [
                  {
                    id: 'DemoIG_STU1::DemoSuite-Group02-GHI-1-3',
                    test_groups: [],
                    title: 'super nested group',
                  },
                ],
                title: 'Demo Group Instance 3',
              },
              {
                id: 'DemoIG_STU1::DemoSuite-Group02-GHI-2',
                test_groups: [],
                title: 'Demo Group Instance 4',
              },
            ],
            title: 'Demo Group Instance 3',
          },
        ],
        title: 'Second Group',
      },
    ],
    title: 'Demonstration Suite',
  },
  test_suite_id: 'DemoIG_STU1::DemoSuite',
};
