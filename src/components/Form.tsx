import { Input } from "./Input";
import { Button } from "./Button";

import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.formContainer}>
      <Input placeholder="Adicione uma nova tarefa" />
      <Button />
    </form>
  );
}
