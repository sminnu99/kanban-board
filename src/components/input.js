import {useContext} from 'react'
import {taskContext} from '../context/taskContext'
import {PlusCircleIcon as Add} from '@heroicons/react/solid'

import styles from './input.module.css'

function Input({group}) {

    const [tasks, setTasks] = useContext(taskContext)

    const addTask = (e) => {
        e.preventDefault()
        // console.log(e)
        const text = document.getElementById(`add__input__${group}`).value
        if (text.trim() === '') {
            document.getElementById(`add__input__${group}`).value = ''
            alert("Can't have empty tasks")
           return; 
        }
        // console.log(text)
        const newTask = {
            name: text,
            group: group,
        }
        console.log(newTask)
        const newTasks = [...tasks]
        newTasks.push(newTask)
        setTasks(newTasks)
        document.getElementById(`add__input__${group}`).value = ''
    }

    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            addTask(e)
          }
      
    }

    const placeholders = [
        'Scream for no reason',
        "Flirt with neighbour's cat",
        "Slap a friend",
        "Go on a date with your hand",
        "Throw away the damn laptop!"
    ]

    const randomPlaceholderIndex = Math.floor(((Math.random()*1000) % placeholders.length))
    const randomPlaceholderValue = placeholders[randomPlaceholderIndex]

    return (
        <div className={styles.container}>
            <form>
                <input className={styles.input_field} id={`add__input__${group}`} placeholder={randomPlaceholderValue} onKeyPress={onKeyUp} />
                <Add color="white" onClick={addTask}  className={styles.button} />
            </form>
        </div>
    )
}

export default Input
