import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PageTransition = forwardRef((props, ref) => {
    const containerRef = useRef(null);
    const barsRef = useRef([]);

    useGSAP(() => {
    }, { scope: containerRef });

    useImperativeHandle(ref, () => ({
        animateIn: (onComplete) => {
            const tl = gsap.timeline({
                onComplete: onComplete
            });

            // Ensure opacity is 1 before starting (in case it was hidden)
            // Animate height to 100%
            tl.set(barsRef.current, { opacity: 1 })
                .to(barsRef.current, {
                    height: '100%',
                    duration: 0.2,
                    stagger: 0.05,
                    ease: 'power2.inOut',
                    transformOrigin: "top"
                });
        },
        animateOut: (onComplete) => {
            const tl = gsap.timeline({
                onComplete: onComplete
            });

            // Animate height back to 0%
            tl.to(barsRef.current, {
                height: '0%',
                duration: 0.2,
                stagger: 0.05,
                ease: 'power2.inOut',
                transformOrigin: "bottom"
            });
        }
    }));

    const colors = [
        'var(--secondary-color)',
        'var(--tertiary-color)',
        'var(--secondary-color)',
        'var(--tertiary-color)',
        'var(--secondary-color)',
        'var(--tertiary-color)',
        'var(--secondary-color)',
        'var(--tertiary-color)',
    ];

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            {colors.slice(0, 8).map((color, i) => (
                <div
                    key={i}
                    ref={el => barsRef.current[i] = el}
                    style={{
                        height: '0%',
                        flex: 1, // Use flex 1 to fill space evenly
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
});

export default PageTransition;
