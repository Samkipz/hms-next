import {
    MdCorporateFare,
    MdDashboard,
    MdOutlineSick,
    MdOutlineInventory,
    MdManageHistory,
    MdQueryStats,
    MdAppRegistration,
  } from "react-icons/md";
  import {
    FaUserDoctor,
    FaUserNurse,
    FaSyringe,
    FaMoneyBillTrendUp,
    FaPrescriptionBottleMedical,
    FaRegFileLines,
  } from "react-icons/fa6";
  
  const dataItems = [
    {
      title: "Main Dashboard",
      list: [
        {
          title: "Dashboard",
          path: "/admin",
          icon: <MdDashboard />,
        },
        {
          title: "Departments",
          path: "/admin/department",
          icon: <MdCorporateFare />,
        },
        {
          title: "Registry",
          path: "/admin/registry",
          icon: <MdAppRegistration />,
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
          title: "General",
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

  export default dataItems;