import styles from "./card.module.css";

const card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.moduleIcon}>{item.icon}</div>
      <div className={styles.moduleName}>{item.title}</div>
    </div>
  );
};

export default card;
