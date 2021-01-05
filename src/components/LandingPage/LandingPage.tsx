import React, { FC } from 'react';
import {
  Typography,
  Container,
  Button,
  Zoom,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  TextField,
  Input,
  Divider,
} from '@material-ui/core';
import useStyles from './styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

interface LandingPageProps {
  presets: string[];
  testSets: string[];
}

const Header: FC<LandingPageProps> = ({ presets, testSets }) => {
  const styles = useStyles();
  const [expanded, setExpand] = React.useState(false);
  const [presetChosen, setPresetChosen] = React.useState('None');
  const [fhirServerUrl, setFhirServerUrl] = React.useState('');
  const [testSetChosen, setTestSetChosen] = React.useState('');
  return (
    <div className={styles.main}>
      <Container maxWidth="md">
        <Typography variant="h2">FHIR Testing with Inferno</Typography>
        <Typography variant="h5">
          Inferno is an open source tool that tests whether patients can access their health data.
          Test your server's conformance to authentication, authorization, and FHIR content
          standards :)
        </Typography>
        <Zoom in={!expanded}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<PlayArrowIcon />}
            onClick={() => setExpand(true)}
          >
            Get Started
          </Button>
        </Zoom>
        <Zoom in={expanded}>
          <Container maxWidth="md">
            <Paper elevation={4} className={styles.getStarted}>
              <Container maxWidth="md">
                <Typography variant="h4" align="center">
                  Start Testing
                </Typography>
                <Grid container spacing={4} className={styles.inputGrid}>
                  <Grid item xs={8}>
                    <FormControl className={styles.formControl}>
                      <InputLabel>Test Set</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={testSetChosen}
                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                          setTestSetChosen(event.target.value as string);
                        }}
                      >
                        {testSets.map((preset) => {
                          return <MenuItem value={preset}>{preset}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-secondary"
                        label="FHIR Server"
                        variant="outlined"
                        placeholder="http://your-fhir-server.org"
                        value={fhirServerUrl}
                        onChange={(event) => setFhirServerUrl(event.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={2} alignItems="center" alignContent="center">
                    <FormControl className={styles.formControl}>
                      <InputLabel>Preset Configuration</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={presetChosen}
                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                          setPresetChosen(event.target.value as string);
                        }}
                      >
                        {presets.map((preset) => {
                          return <MenuItem value={preset}>{preset}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </Zoom>
      </Container>
    </div>
  );
};

export default Header;
