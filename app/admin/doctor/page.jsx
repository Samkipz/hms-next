import Search from "@/ui/dashboard/search/search";
import styles from "./doctor.modules.css";

const AdminDoctor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>Top space</div>
      <div className={styles.tableContainer}>
        <div className={styles.tableTop}>
          <Search />
        </div>
        <table className={styles.table}>Table</table>
      </div>
    </div>
  );
};

export default AdminDoctor;
