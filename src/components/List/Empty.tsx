import styles from "./Empty.module.css";

import clipboard from "../../assets/Clipboard.svg";

export function Empty() {
  return (
    <div className={styles.emptyListContainer}>
      <img
        src={clipboard}
        alt="Imagem de uma prancheta para a lista vazia"
        className={styles.tasksContainerEmptyImage}
      />

      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
