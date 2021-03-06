// import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectEnhancedPage = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(
        'OUTPUT ÄR ~ file: [...id].tsx ~ line 7 ~ ProjectEnhancedPage ~ id',
        id
    );

    return (
        <div>
            <h1>IdProjectEnhancedPage</h1>
            <h2>Detta är parametern: {id}</h2>
            <Link href="/">Tillbaka till start</Link>
        </div>
    );
};

export default ProjectEnhancedPage;
