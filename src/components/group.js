import {useState, useContext} from 'react'

import {taskContext} from '../context/taskContext'
import Task from './Task'
import Input from './input'

import styles from './group.module.css'

function Group({name}) {

    const [tasks, setTasks] = useContext(taskContext)
    
    const [taskName, setTaskName] = useState('')
    
    const handleChange = () => {
        console.log(1)
    }

    // const addTask = (e) => {
    //     e.preventDefault()        
    //     const newTask = {
    //         name: taskName,
    //         group: name
    //     }

    //     const newTasks = [...tasks]
    //     newTasks.push(newTask)
    //     setTasks(newTasks)

    //     const input = document.createElement('input')
    //     document.body.appendChild(input)
    //     input.setAttribute('id', 'invisible-input')
    //     input.focus()

    //     // console.log(input)

    //     input.onchange = handleChange

    // }

    let groupTasks = [...tasks]

    groupTasks = tasks.filter(task => task.group === name) 

    return (
            <div className={styles.container}>
                <div className={styles.title}>
                    {name}
                </div>
                <Input group={name} />
                <div className={styles.content}>
                    {
                        groupTasks.map(task => (
                            <Task task={task} />
                        ))
                    }
                </div>
            </div>

    )
}

export default Group
