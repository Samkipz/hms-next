// import Search from "@/ui/dashboard/search/search";
import Search from '../../ui/dashboard/search/search'
import styles from "./doctor.module.css";
import Link from "next/link";
import Image from "next/image";
// import Pagination from "@/ui/dashboard/pagination/pagination";
import Pagination from '../../ui/dashboard/pagination/pagination'
// import prisma from "@/lib/prisma";
import prisma from '../../lib/prisma';

const AdminDoctor = async () => {
  const docs = await prisma.user.findMany();
  console.log(docs);

  return (
    <div className={styles.container}>
      <div className={styles.top}>Top space</div>
      <div className={styles.tableContainer}>
        <div className={styles.tableTop}>
          <Search placeholder="Search doctor" />
          <Link href="/admin/doctor/add">
            <button className={`${styles.button} ${styles.addButton}`}>
              Add Doctor
            </button>
          </Link>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <td>Staff No</td>
              <td>Name</td>
              <td>Gender</td>
              <td>DOB</td>
              <td>Speciality</td>
              <td>Phone</td>
              <td>Created At</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc) => (
              <tr key={doc.id}>
                <td>12345</td>
                <td>
                  <div className={styles.user}>
                    <Image
                      src="/noavatar.png"
                      alt="doctor avatar"
                      width={40}
                      height={40}
                      className={styles.avatar}
                    />
                    {doc.name}
                  </div>
                </td>
                <td>{doc.email}</td>
                <td>13.01.1995</td>
                <td>Dermatologist</td>
                <td>0712345678</td>
                <td>13.01.2024</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default AdminDoctor;
