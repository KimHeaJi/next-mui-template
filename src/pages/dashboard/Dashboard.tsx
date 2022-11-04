import { useEffect } from 'react';
import styles from './Dashboard.module.css';

export interface IDashboard {}

export const Dashboard: IDashboard = () => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://backend-dev/dashboard');
  //     console.log(res);
  //   })();
  // }, []);

  return <div>dashboard</div>;
};
