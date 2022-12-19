import styles from './Dashboard.module.css';

import Card from '~/components/common/card/Card';
import { Grid } from '@mui/material';

export interface IDashboardProps {}

const Dashboard = (props: IDashboardProps) => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://backend-dev/dashboard');
  //     console.log(res);
  //   })();
  // }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
