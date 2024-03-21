import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import dataItems from "../../../data";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hospitalName}>
        <Image src="/hosp2.jpg" width="350" height="200" alt="hospital logo" />
      </div>

      <ul className={styles.sidebarMenu}>
        {dataItems.map((cat) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            <ul className={styles.list}>
              {cat.list.map((item) => (
                <li key={item.title}>
                  <MenuLink item={item} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
