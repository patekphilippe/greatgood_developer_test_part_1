import PieChart from "../../components/Chart/PieChart";
import Table from "../../components/Table/Table";
import styles from "./styles.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <h2 className={styles.dashboardTitle}>KYC Application Reports</h2>
      <div className={styles.chartWrapper}>
        <PieChart />
      </div>
      <Table />
    </div>
  );
}

export default Dashboard;
