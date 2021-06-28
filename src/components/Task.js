import styles from './task.module.css'

function Task({name}) {
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                {name}
            </div>
        </div>
    )
}

export default Task