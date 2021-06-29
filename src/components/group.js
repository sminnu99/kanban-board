import Task from './Task'

import styles from './group.module.css'

const sendToInProgress = (task) => {
    task.group = 'In Progress'
}

const sendToCompleted = (task) => {
    task.group = 'Completed'
}

function Group({name, tasks}) {
    return (
            <div className={styles.container}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.content}>
                    {
                        tasks.map(task => (
                            <Task name={task.name} action={name == 'Not Started' ? sendToInProgress(task) : sendToCompleted(task) } />
                        ))
                    }
                </div>
                <button>Add +</button>

            </div>

    )
}

export default Group
