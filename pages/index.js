import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { styled } from '@material-ui/core/styles';
import Divider from '../components/Divider';
import DotControls from '../components/DotControls';


const Preview = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Controls = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: "200px",
}));

export default function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Paper elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Page" />
          <Tab label="Particles" />
          <Tab label="Red Dot" />
        </Tabs>
      </Paper>

      <Divider />

      <Container maxWidth={"md"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Preview>
              left
            </Preview>
          </Grid>
          <Grid item xs={12} md={8}>
            <Controls elevation={1}>
              <DotControls/>
            </Controls>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
