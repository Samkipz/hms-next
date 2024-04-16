import styles from "./add.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Add New doctor</h4>
        <h6>
          Please complete the following form to create a basic profile for the
          doctor. The doctor will complete the rest of the details.
        </h6>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.title}>Name</div>
        <div className={styles.username}>
          <input type="text" placeholder="First Name" name="" required />
          <input type="text" placeholder="Second Name" name="" required />
        </div>
        <div className={styles.title}>Gender</div>

        <select name="gender" id="gender" className={styles.dropdown}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className={styles.title}>Speciality</div>
        <select name="speciality" id="speciality" className={styles.dropdown}>
          <option value="general-doctor">General Doctor</option>
          <option value="dentist">Dentist</option>
        </select>
        <button type="submit" className={styles.submitButton}>Create Doctor</button>
      </form>
    </div>
  );
};

export default page;
