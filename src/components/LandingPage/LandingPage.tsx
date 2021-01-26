import React, { FC } from 'react';
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
} from '@material-ui/core';
import useStyles from './styles';

interface preset {
  name: string;
  fhirServer: string;
  testSet: string;
}

interface LandingPageProps {
  presets: preset[];
  testSets: string[];
}

const Header: FC<LandingPageProps> = ({ presets, testSets }) => {
  const styles = useStyles();
  const [presetChosen, setPresetChosen] = React.useState(0);
  const [fhirServerUrl, setFhirServerUrl] = React.useState('');
  const [testSetChosen, setTestSetChosen] = React.useState('');
  return (
    <div className={styles.main}>
      <Container maxWidth="md">
        <Typography variant="h2">FHIR Testing with Inferno</Typography>
        <Typography variant="h5" className={styles.descriptionText}>
          Inferno is an open source tool that tests whether patients can access their health data.
          Test your server's conformance to authentication, authorization, and FHIR content
          standards :)
        </Typography>
        <Container maxWidth="md">
          <Paper elevation={4} className={styles.getStarted}>
            <Container maxWidth="md">
              <Typography variant="h4" align="center">
                Start Testing
              </Typography>
              <Grid container className={styles.inputGrid}>
                <Grid item xs={7}>
                  <FormControl className={styles.formControl}>
                    <InputLabel>Test Set</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={testSetChosen}
                      disabled={presetChosen > 0}
                      onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                        setTestSetChosen(event.target.value as string);
                      }}
                    >
                      {testSets.map((preset) => {
                        return (
                          <MenuItem key={preset} value={preset}>
                            {preset}
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
                      value={fhirServerUrl}
                      disabled={presetChosen > 0}
                      onChange={(event) => setFhirServerUrl(event.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={1}>
                  <Divider orientation="vertical" className={styles.divider} />
                </Grid>
                <Grid item xs={4}>
                  <FormControl className={styles.formControl}>
                    <InputLabel>Preset Configuration</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={presetChosen}
                      autoWidth={false}
                      onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                        const preset = presets[event.target.value as number];
                        setPresetChosen(event.target.value as number);
                        setFhirServerUrl(preset.fhirServer);
                        setTestSetChosen(preset.testSet);
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
};

export default Header;
