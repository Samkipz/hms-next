import styles from "./search.modules.css";
import { MdSearch } from "react-icons/md";

const Search = (placeholder) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Search;
