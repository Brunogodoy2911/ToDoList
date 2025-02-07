import styles from "./Header.module.css";

interface CountProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export function Header({ tasksCreated, tasksCompleted }: CountProps) {
  return (
    <header>
      <p>
        Tarefas criadas
        <span className={styles.tasksCounter}>{tasksCreated}</span>
      </p>
      <p>
        Concluídas
        <span className={styles.tasksCompletedCounter}>
          {tasksCompleted} de {tasksCreated}
        </span>
      </p>
    </header>
  );
}
