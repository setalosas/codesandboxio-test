import './styles.css'

const Todo = ({todoList}) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <li style={{textAlign: 'left'}}>
            <input type="checkbox" checked={todoItem.done}></input>
            <span>{todoItem.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
const todoList = [
  {name: 'sdfdsfsd', done: false},
  {name: 'rttrtyr6y ertet', done: true},
  {name: '333 555 555', done: false}
]
export default function App() {
  return (
    <div className="App">
      <Todo todoList={todoList} />
    </div>
  )
}
