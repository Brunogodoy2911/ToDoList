import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      Criar <PlusCircle size={18} />
    </button>
  );
}
