import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/adminPage.module.css";
// import dataItems from "@/data";
import dataItems from '../data';
import Link from "next/link";

const adminDashboard = () => {
  // List of desired modules to display on admin dashboard
  const desiredModules = [
    "Doctor",
    "Nurse",
    "Patient",
    "Laboratory",
    "Pharmacy",
    "Registry",
    "Accounts",
    "Inventory",
    "General",
    "Statistics",
    "Quick Reports",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.allModules}>
        {dataItems.map((category) =>
          category.list
            .filter((item) => desiredModules.includes(item.title))
            .map((item) => (
              <div key={item.title} className={styles.card}>
                <Link href={item.path} className={styles.container}>
                  <Card item={item} />
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default adminDashboard;
