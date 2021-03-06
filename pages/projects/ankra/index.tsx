import Link from 'next/link';

const AnkraPage = () => {
    return (
        <div>
            <h1>Detta är ankrasidan</h1>
            <p><a href="">sadadas</a>
            </p>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <Link href="/projects">
                <a>Projekt</a>
            </Link>
            <Link href="/">
                <a title="merinfo">Start</a>
            </Link>
        </div>
    );
};

export default AnkraPage;
