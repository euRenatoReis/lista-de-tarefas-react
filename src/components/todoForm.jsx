
import { useState } from 'react'
import React from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category)
        setValue('')
        setCategory("")
    }

    return (
        <div className='todo-form'>

            <h2>criar outra tarefa</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Digitar o Titulo' value={value} onChange={(e) => setValue(e.target.value)}
                
                ></input>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>

                    <option>Selecione a Categoria</option>

                    <option value={'trabalho'}>trabalho</option>

                    <option value={'pessoal'}>pessoal</option>

                    <option value={'estudos'}>estudos</option>

                </select>

                <button type='submit'> Criar Tarefa </button>

            </form>
        </div>
    )
}

export default TodoForm