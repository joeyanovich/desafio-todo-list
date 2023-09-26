import { Header } from './components/Header'
import { Task } from './components/Task'
import { Todo } from './components/Todo'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Todo />
      <Task />
    </div>
  )
}

export default App
