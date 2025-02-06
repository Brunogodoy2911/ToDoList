import { Trash } from "phosphor-react";

import styles from "./Item.module.css";

export function Item() {
  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" className={styles.checkbox} />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
