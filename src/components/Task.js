import { ChevronRightIcon as ArrowRight } from '@heroicons/react/solid'

import styles from './task.module.css'

function Task({name, action}) {
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.name}>{name}</div>
                <button className={styles.icon}> 
                    <ArrowRight onClick={action} />
                </button>
            </div>
        </div>
    )
}

export default Task