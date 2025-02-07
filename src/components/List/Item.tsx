import { Trash } from "phosphor-react";
import { ITask } from "../../App";

import styles from "./Item.module.css";

interface Props {
  data: ITask;
  removeTask: (taskId: number) => void;
  toggleTaskCompletion: (taskId: number, value: boolean) => void;
}

export function Item({ data, removeTask, toggleTaskCompletion }: Props) {
  function handleTaskToggle() {
    toggleTaskCompletion(data.id, !data.completed);
  }

  return (
    <div className={styles.taskContainer}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <input
          type="checkbox"
          readOnly
          checked={data.completed}
          className={styles.checkbox}
        />
      </label>

      <p className={data.completed ? styles.pChecked : ""}>{data.task}</p>
      <button onClick={() => removeTask(data.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
