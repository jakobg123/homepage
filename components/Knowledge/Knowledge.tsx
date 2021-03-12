import TabList from "../TabList";

import styles from "./Knowledge.module.scss";


const Knowledge = ({ knowledge, inViewRef }) => {
    return (
        <div className={styles['Knowledge__Grid']}>
            <TabList knowledge={knowledge.frontend} title={'Frontend'} />
            <div
                ref={inViewRef}
                className={styles['Knowledge__TabListWrapper--Backend']}>
                <TabList
                    knowledge={knowledge.backend}
                    title={'Backend'}
                    dark={true}
                />
            </div>
        </div>
    )
}

export default Knowledge
