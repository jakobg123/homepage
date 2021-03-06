import { MouseEventHandler, useState } from 'react';

import Link from 'next/link';
import styles from './Test.module.scss';

interface TestProps {
    text: string;
}
import classNames from 'classnames';
// import styles from "./Test.module.scss";

export const Test: React.FC<TestProps> = ({ text }) => {
    interface IColor {
        colorBool: boolean;
    }
    const [color, setColor] = useState<IColor>({ colorBool: false });

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setColor({ colorBool: !color.colorBool });
    };

    return (
        <div>
            <h1 className={styles['Test']}>{text}</h1>
            <button onClick={handleClick}>Ändra</button>
            <Link href="/projects">
                <a
                    className={classNames([
                        styles['Button'],
                        { [styles['Button--Dark']]: color.colorBool },
                    ])}>
                    Till projekten
                </a>
            </Link>
        </div>
    );
};
