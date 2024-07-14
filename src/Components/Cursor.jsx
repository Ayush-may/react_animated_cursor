import React, {useEffect, useState} from "react";
// import './Cursor.css';
import {gsap} from "gsap";

const styles = {
    largeCircle: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'gold',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1000,
    },
    smallCircle: {
        position: 'absolute',
        width: '25px',
        height: '25px',
        backgroundColor: 'black',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1001,
    },
    smallestCircle: {
        position: 'absolute',
        width: '10px',
        height: '10px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1002,
    }
};

const Cursor = () => {
    const [largeCircle, setLargeCircle] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseMove = (e) => {
            gsap.to(".largeCircle", {
                x: e.clientX - 25,
                y: e.clientY - 25,
                ease: "back",
                duration: 1.5
            });
            gsap.to(".smallCircle", {
                x: e.clientX - 12,
                y: e.clientY - 12,
                ease: "back",
                duration: 1
            });
            gsap.to(".smallestCircle", {
                x: e.clientX - 5,
                y: e.clientY - 5,
                ease: "back",
                duration: 3
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            <div className='smallCircle' style={styles.smallCircle}></div>
            <div className='smallestCircle' style={styles.smallestCircle}></div>
            <div className='largeCircle' style={styles.largeCircle}></div>
        </>
    );
};

export default Cursor;
