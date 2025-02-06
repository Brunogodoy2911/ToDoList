import { Item } from "./List/Item";
import { Empty } from "./List/Empty";

import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasksContainer}>
      <header>
        <p>
          Tarefas criadas <span className={styles.tasksCounter}>0</span>
        </p>
        <p>
          Concluídas <span className={styles.tasksCompletedCounter}>0</span>
        </p>
      </header>

      <div className={styles.tasksList}>
        {/*<Empty /> */}

        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

      </div>
    </div>
  );
}
