
import styles from './header.module.css'


function Header({ name, fanOf }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lokesh's Kanban Board</h1>
        </div>
    )

}

export default Header