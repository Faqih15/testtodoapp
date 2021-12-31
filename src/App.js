import { useEffect, useRef, useState } from 'react'
import { HiPlus } from 'react-icons/hi'

function App() {
  const todoinputref = useRef()
  const [todo, gantitodo] = useState([{ label: 'minum kopi', status: 'draft' }])

  const onEnter = function (e) {
    if (e.code === "Enter") {
      const label = e.target.value
      const newTodo = [...todo]
      newTodo.push({ label, status: 'draft' })
      gantitodo(newTodo)
      e.target.value = ''
    }
  }

  const onClick = (e) => {
    const label = todoinputref.current.value
    const newTodo = [...todo]
    newTodo.push({ label, status: 'draft' })
    gantitodo(newTodo)
    todoinputref.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const label = e.target.label.value
    const newTodo = [...todo]
    newTodo.push({ label, status: 'draft' })
    gantitodo(newTodo)
    e.target.label.value = ''
  }

  const checktodo = (e, i) => {
    const newTodo = [...todo]
    if (e.target.checked) {
      newTodo[i].status = 'done'
      gantitodo(newTodo)
    }
  }

  const checkdraft = (e, i) => {
    const newTodo = [...todo]
    if (e.target.checked) {
      newTodo[i].status = 'draft'
      gantitodo(newTodo)
    }
  }

  const onDrop = () => {

  }
  
  const onDragDraft = () => {

  }

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="p-10 mx-auto w-full">
        <div className="text-xl text-gray-500">Todo</div>
        <form className="space-y-5 m-5 w-full" drop={onDrop} onSubmit={handleSubmit}>
          {
            todo.map((x, i) => {
              return x.status === 'draft' ? <div key={i} onDrag={onDragDraft} className="flex items-center space-x-5 border border-gray-300 px-4 py-2 rounded">
                <input type="checkbox" onChange={(e) => checktodo(e, i)} />
                <label htmlFor="">{x.label}</label>
              </div> : null
            })
          }
          <div className="flex items-center space-x-5 border border-gray-300 px-4 py-2 rounded">
            <HiPlus />
            <input ref={todoinputref} name="label" type="text"
              className="w-full outline-0"
              placeholder='Masukan tugas yang akan dikerjakan'
            // onKeyUp={onEnter}
            />
            <button type="submit">Save</button>
          </div>
        </form >
      </div>
      <div className="p-10 mx-auto w-full">
        <div className="text-xl text-gray-500">Done</div>
        <div className='space-y-5 m-5 w-full'>
          {
            todo.map((x, i) => {
              return x.status === 'done' ? <div key={i} className="flex items-center space-x-5 border border-gray-300 px-4 py-2 rounded">
                <input type="checkbox" onChange={(e) => checkdraft(e, i)} />
                <label htmlFor="">{x.label}</label>
              </div> : null
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
