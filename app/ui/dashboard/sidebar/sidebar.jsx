import React from "react";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";

import {
  MdCorporateFare,
  MdDashboard,
  MdOutlineSick,
  MdOutlineInventory,
  MdManageHistory,
  MdQueryStats,
} from "react-icons/md";
import {
  FaUserDoctor,
  FaUserNurse,
  FaSyringe,
  FaMoneyBillTrendUp,
  FaPrescriptionBottleMedical,
  FaRegFileLines,
} from "react-icons/fa6";

const leftBarItems = [
  {
    title: "Main Dashboard",
    list: [
      {
        title: "Admin Dashboard",
        path: "/admin",
        icon: <MdDashboard />,
      },
      {
        title: "Departments",
        path: "/admin/department",
        icon: <MdCorporateFare />,
      },
      {
        title: "Doctor",
        path: "/admin/doctor",
        icon: <FaUserDoctor />,
      },
      {
        title: "Nurse",
        path: "/admin/nurse",
        icon: <FaUserNurse />,
      },
      {
        title: "Patient",
        path: "/admin/patient",
        icon: <MdOutlineSick />,
      },
      {
        title: "Laboratory",
        path: "/admin/laboratory",
        icon: <FaSyringe />,
      },
      {
        title: "Pharmacy",
        path: "/admin/pharmacy",
        icon: <FaPrescriptionBottleMedical />,
      },
      {
        title: "Accounts",
        path: "/admin/accounts",
        icon: <FaMoneyBillTrendUp />,
      },
      {
        title: "Inventory",
        path: "/admin/inventory",
        icon: <MdOutlineInventory />,
      },
    ],
  },
  {
    title: "Miscellaneous",
    list: [
      {
        title: "General Management",
        path: "/admin/manage",
        icon: <MdManageHistory />,
      },
      {
        title: "Statistics",
        path: "/admin/statistics",
        icon: <MdQueryStats />,
      },
      {
        title: "Quick Reports",
        path: "/admin/reports",
        icon: <FaRegFileLines />,
      },
    ],
  },
];

const sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hospitalName}>Hospital Name</div>

      <ul className={styles.sidebarMenu}>
        {leftBarItems.map((cat) => (
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

export default sidebar;
