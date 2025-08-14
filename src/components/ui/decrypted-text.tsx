'use client';

import { useEffect, useRef, useState } from "react";

type DecryptedTextProps = {
    text: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
const scrambleFrequency = 5000; // 3 seconds
const totalIterations = 30; // Maximum number of iterations for scrambling
const timeBetweenIterations = 40; // Time in ms between each scramble iteration

export default function DecryptedText({ text, className }: DecryptedTextProps) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
    const [displayText, setDisplayText] = useState(text);

    const innerIntervalRef = useRef<ReturnType<typeof setInterval>>(null);
    const outerIntervalRef = useRef<ReturnType<typeof setInterval>>(null);

    function scrambleText(text: string, fromIndex = 0): string {
        return text.split('').map((char, index) => {
            if (index < fromIndex) return char; // Keep original characters until fromIndex
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }).join('');
    }

    function clearInnerInterval() {
        if (innerIntervalRef.current) {
            clearInterval(innerIntervalRef.current);
            innerIntervalRef.current = null;
        }
    }

    function triggerScrambleAnimation() {
        let iterationCount = 0;
        let revealIndex = 0;
        const maxIterations = totalIterations / text.length;
        innerIntervalRef.current = setInterval(() => {
            if (revealIndex >= text.length) {
                clearInnerInterval();
                setDisplayText(text);
                return;
            }
            if (iterationCount >= maxIterations) {
                revealIndex++;
                iterationCount = 0;
            }
            setDisplayText(scrambleText(text, revealIndex));
            iterationCount++;
        }, timeBetweenIterations);
    }

    useEffect(() => {
        setPrefersReducedMotion(
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayText(text);
            return;
        }

        outerIntervalRef.current = setInterval(() => {
            if (innerIntervalRef.current) {
                clearInnerInterval();
            }
            triggerScrambleAnimation();
        }, scrambleFrequency);

        return () => {
            clearInnerInterval();
            if (outerIntervalRef.current) {
                clearInterval(outerIntervalRef.current);
                outerIntervalRef.current = null;
            }
        };
    }, [text, prefersReducedMotion]);

    return (
        <>
            <span className={className} aria-hidden="true">
                {displayText}
            </span>
            <span className="sr-only" aria-live="polite" aria-atomic="true">
                {text}
            </span>
        </>
    )
}