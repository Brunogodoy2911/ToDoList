import { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Header as HeaderList } from "./components/List/Header";
import { Empty } from "./components/List/Empty";
import { Item } from "./components/List/Item";

import styles from "./App.module.css";

import "./global.css";

export interface ITask {
  id: number;
  task: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newTask.trim() === "") {
      alert("Por favor, insira uma tarefa válida");
    }

    const newTaskCreate: ITask = {
      id: new Date().getTime(),
      task: newTask,
      completed: false,
    };

    setTasks((state) => [...state, newTaskCreate]);
    setNewTask("");
  }

  function handleRemoveTask(taskId: number) {
    const filteredTasks = tasks.filter((tasks) => tasks.id !== taskId);

    if (!confirm("Deseja mesmo excluir esta tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask(taskId: number, value: boolean) {
    const updateTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: value };
      }

      return { ...task };
    });

    setTasks(updateTasks);
  }

  const isNewTaskEmpty = newTask.trim() === "";
  const tasksCreated = tasks.length;
  const checkedTasksCounter = tasks.reduce((prevValue, task) => {
    if (task.completed) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <form onSubmit={handleCreateNewTask} className={styles.formContainer}>
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <Button disabled={isNewTaskEmpty} />
        </form>

        <div className={styles.tasksContainer}>
          <HeaderList
            tasksCreated={tasksCreated}
            tasksCompleted={checkedTasksCounter}
          />

          <div className={styles.tasksList}>
            {tasks.length === 0 ? (
              <Empty />
            ) : (
              tasks.map((task) => {
                return (
                  <Item
                    key={task.id}
                    data={task}
                    removeTask={handleRemoveTask}
                    toggleTaskCompletion={handleToggleTask}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
