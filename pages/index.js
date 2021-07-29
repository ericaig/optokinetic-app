import React from 'react';
import { Container, Divider, Grid, makeStyles, Paper, Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  },
}));

export default function Index() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container color={'#19857b'}>
      <Paper className={classes.root} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>

      <Divider  />

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>left </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}> right </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}