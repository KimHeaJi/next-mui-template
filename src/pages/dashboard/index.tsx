import styles from './Dashboard.module.css';

export interface IDashboardProps {}

const Dashboard = (props: IDashboardProps) => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://backend-dev/dashboard');
  //     console.log(res);
  //   })();
  // }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
