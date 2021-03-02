import React, { Component } from 'react';
import {
  Typography,
  Container,
  Button,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  TextField,
  Divider,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import styles from './styles';
import { TestSuite, TestSession } from 'models/testSuiteModels';
import { getTestSuites, postTestSessions } from 'api/infernoApiService';

interface preset {
  name: string;
  fhirServer: string;
  testSet: string;
}

interface LandingPageProps extends WithStyles<typeof styles> {
  presets: preset[];
  launchTestSuite(testSuite: TestSuite): void;
}

type LandingPageState = {
  presetChosen: number;
  fhirServerUrl: string;
  testSetChosen: string;
  testSuites: TestSuite[];
};

export class LandingPage extends Component<LandingPageProps, LandingPageState> {
  public state: LandingPageState = {
    presetChosen: 0,
    fhirServerUrl: '',
    testSetChosen: '',
    testSuites: [],
  };

  componentDidMount(): void {
    getTestSuites()
      .then((testSuites: TestSuite[]) => {
        this.setState({ ...this.state, testSuites: testSuites });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  createTestSession(): void {
    postTestSessions(this.state.testSetChosen)
      .then((testSession: TestSession) => {
        if (testSession.test_suite) {
          this.props.launchTestSuite(testSession.test_suite);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render(): JSX.Element {
    const { classes, presets } = this.props;
    return (
      <div className={classes.main}>
        <Container maxWidth="md">
          <Typography variant="h2">FHIR Testing with Inferno</Typography>
          <Typography variant="h5" className={classes.descriptionText}>
            Inferno is an open source tool that tests whether patients can access their health data.
            Test your server's conformance to authentication, authorization, and FHIR content
            standards :)
          </Typography>
          <Container maxWidth="md">
            <Paper elevation={4} className={classes.getStarted}>
              <Container maxWidth="md">
                <Typography variant="h4" align="center">
                  Start Testing
                </Typography>
                <Grid container className={classes.inputGrid}>
                  <Grid item xs={7}>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Test Set</InputLabel>
                      <Select
                        labelId="testSuite-select-label"
                        id="testSuite-select"
                        data-testid="testSuite-select"
                        value={this.state.testSetChosen}
                        disabled={this.state.presetChosen > 0}
                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                          this.setState((state) => {
                            return { ...state, testSetChosen: event.target.value as string };
                          });
                        }}
                      >
                        {this.state.testSuites.map((testSuite: TestSuite) => {
                          return (
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                            <MenuItem key={testSuite.title} value={testSuite.id}>
                              {testSuite.title}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-secondary"
                        label="FHIR Server"
                        placeholder="http://your-fhir-server.org"
                        value={this.state.fhirServerUrl}
                        disabled={this.state.presetChosen > 0}
                        onChange={(event) =>
                          this.setState((state) => {
                            return { ...state, fhirServerUrl: event.target.value };
                          })
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={1}>
                    <Divider orientation="vertical" className={classes.divider} />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Preset Configuration</InputLabel>
                      <Select
                        labelId="preset-select-label"
                        id="preset-select"
                        value={this.state.presetChosen}
                        autoWidth={false}
                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                          const preset = presets[event.target.value as number];
                          this.setState({
                            presetChosen: event.target.value as number,
                            fhirServerUrl: preset.fhirServer,
                            testSetChosen: preset.testSet,
                          });
                        }}
                      >
                        {presets.map((preset, index) => {
                          return (
                            <MenuItem key={index} value={index}>
                              {preset.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => this.createTestSession()}
                >
                  GO!
                </Button>
              </Container>
            </Paper>
          </Container>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LandingPage);
