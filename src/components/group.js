import Task from './Task'

import styles from './group.module.css'

function Group({name, tasks}) {
    return (
            <div className={styles.container}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.content}>
                    {
                        tasks.map(task => (
                            <Task name={task.name} />
                        ))
                    }
                </div>
                <button>Add +</button>

            </div>

    )
}

export default Group
