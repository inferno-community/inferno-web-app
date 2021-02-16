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

const testSuitesEndpoint = 'http://localhost:3001/api/test_suites';

interface preset {
  name: string;
  fhirServer: string;
  testSet: string;
}

type TestSet = {
  title: string;
  id: string;
};

interface LandingPageProps extends WithStyles<typeof styles> {
  presets: preset[];
}

type LandingPageState = {
  presetChosen: number;
  fhirServerUrl: string;
  testSetChosen: string;
  testSets: TestSet[];
};

export class LandingPage extends Component<LandingPageProps, LandingPageState> {
  public state: LandingPageState = {
    presetChosen: 0,
    fhirServerUrl: '',
    testSetChosen: '',
    testSets: [],
  };

  public componentDidMount(): void {
    fetch(testSuitesEndpoint)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ ...this.state, testSets: result as TestSet[] });
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
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.testSetChosen}
                        disabled={this.state.presetChosen > 0}
                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                          this.setState((state) => {
                            return { ...state, testSetChosen: event.target.value as string };
                          });
                        }}
                      >
                        {this.state.testSets.map((preset) => {
                          return (
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                            <MenuItem key={preset.title} value={preset.title}>
                              {preset.title}
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
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
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
                <Button variant="contained" size="large" color="primary">
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
