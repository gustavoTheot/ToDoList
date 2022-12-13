import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { TaskBoard } from './components/TaskBoarder'


function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <main>
          <TaskBoard/>
        </main>
      </div>
    </div>
  )
}

export default App
