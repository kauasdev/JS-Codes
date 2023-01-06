import { ChangeEvent, useState } from 'react'

import { Header, Main, TaskList } from './styles';

import rocket from "./assets/rocket.svg";
import plus from "./assets/plus.png";
import clip from "./assets/Clipboard.png";
import { Task } from './components/Task';

function App() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState('');

  const haveTasks = tasks.length ? true : false;

  function saveText(event: ChangeEvent<HTMLInputElement>){
    setTaskText(event.target.value)
  }

  function newTask() {
    tasks.push(taskText);
    setTaskText('');
  }

  function deleteTask(commentToDelete: string) {
    const filterTasks = tasks.filter(comment => comment !== commentToDelete);

    setTasks(filterTasks);
  }

  return (
    <div className="App">
      <Header>
        <div className='logo'>
          <img src={rocket}/>
          <span>
            <p>to</p>
            <p>do</p>
          </span>
        </div>
      </Header>
      <Main>
        <div className='addTask'>
          <input type="text" placeholder='Adicione uma nova tarefa' value={taskText} onChange={saveText}/>
          <button onClick={newTask}><p>Criar</p> <img src={plus}/></button>
        </div>

        <TaskList>
          <div className='countTasks'>
            <span className='allTasks'>Tarefas Criadas <p>{tasks.length}</p></span>
            <span className='doneTasks'>Tarefas Concluidas <p>{tasks.length}</p></span>
          </div>
          <div className={!haveTasks ? "noTasks show" : "noTasks"}>
            <img src={clip}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          <div className="list">
            {tasks.map(task => {
              return (
                <Task 
                  title={task}
                  onDeleteComment={deleteTask}
                />
              )
            })}
          </div>
        </TaskList>
      </Main>
    </div>
  )
}

export { App };
