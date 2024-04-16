"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.navTitle}>{pathname.split("/").pop()}</div>
      <div className={styles.navMenu}>
        <MdOutlineChat size={30} />
        <MdNotifications size={30} />
        <div className={styles.avatar}>
          <Image
            src="/noavatar.png"
            alt="profile picture"
            width="40"
            height="40"
          />
          <h6>Some name</h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
