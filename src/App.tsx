import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div className={styles.container}>
      <Header />

      <Form />

      <Tasks />
    </div>
  );
}
