import {useContext} from 'react'
import {taskContext} from '../context/taskContext'
import { ChevronRightIcon as ArrowRight, 
            ChevronLeftIcon as ArrowLeft } from '@heroicons/react/solid'

import styles from './task.module.css'

function Task({task}) {
    
    const [tasks, setTasks] = useContext(taskContext)
    
    const sendToInProgress = () => {
        //copied the tasks as states aren't directly mutable
        let newTasks = [...tasks]
        
        newTasks.forEach( (aTask, index) => {
                if(aTask.name === task.name) {
                    newTasks[index].group = 'In Progress'
                }
        });

        setTasks(newTasks)

        // console.log(newTasks)
    }
    
    const sendToCompleted = () => {
        //copied the tasks as states aren't directly mutable
        let newTasks = [...tasks]
        newTasks.forEach( (aTask, index) => {
                if(aTask.name === task.name) {
                    newTasks[index].group = 'Completed'
                }
        });
        setTasks(newTasks)
    }

    const sendToNotStarted = () => {
        //copied the tasks as states aren't directly mutable
        let newTasks = [...tasks]
        newTasks.forEach( (aTask, index) => {
                if(aTask.name === task.name) {
                    newTasks[index].group = 'Not Started'
                }
        });
        setTasks(newTasks)
    }
    
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                {
                    task.group !== 'Not Started' &&    
                    <button className={styles.icon}> 
                        <ArrowLeft onClick={task.group === "Completed" ? sendToInProgress: sendToNotStarted} />
                    </button>
                }
                <div className={styles.name}>{task.name}</div>
                {/* <div className={styles.name}>{task.group}</div> */}
                {
                    task.group !== 'Completed' &&    
                    <button className={styles.icon}> 
                        <ArrowRight onClick={task.group === "Not Started" ? sendToInProgress: sendToCompleted} />
                    </button>
                }
            </div>
        </div>
    )
}

export default Task