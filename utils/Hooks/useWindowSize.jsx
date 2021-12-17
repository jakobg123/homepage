import { useLayoutEffect, useState, useEffect } from 'react';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    const hook = () => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }

    typeof window !== 'undefined'
    ?
    useLayoutEffect(() => {
        hook();
    }, [])
    :
    useEffect(() => {
        hook();
    }, [])

    return size;
}

export default useWindowSize;
