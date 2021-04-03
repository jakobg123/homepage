import TabList from '../TabList';

import styles from './Knowledge.module.scss';
import classNames from 'classnames';
import { IKnowledgeData } from '../../types/typesData';

import { useInView } from 'react-intersection-observer';

interface IKnowledgeProps {
    knowledge: IKnowledgeData;
}

const Knowledge: React.FC<IKnowledgeProps> = ({ knowledge }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.05,
        triggerOnce: true,
    });

    return (
        <div className={styles['Knowledge']}>
            <TabList knowledge={knowledge.frontend} title={'Frontend'} />

            <div className={classNames(styles['Knowledge__TabListWrapper--Backend'])}>
                <div
                    ref={ref}
                    className={classNames(styles['Knowledge__TabListWrapper--Hide'], {
                        [styles['Knowledge__TabListWrapper--Show']]: inView,
                    })}>
                    <TabList
                        knowledge={knowledge.backend}
                        title={'Backend'}
                        dark={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
