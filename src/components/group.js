import styles from './group.module.css'

function Group({name}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.content}>
                empty
            </div>
        </div>
    )
}

export default Group
