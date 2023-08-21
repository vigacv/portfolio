import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="25.961"
      height="28.841"
      viewBox="0 0 25.961 28.841"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 17.001 24.88 L 17.001 17.12 L 14.441 17.12 L 14.441 16.24 L 25.961 16.24 L 25.961 17.12 L 24.401 17.12 L 24.401 28.4 L 23.801 28.4 Q 23.081 27.4 21.761 27.4 A 2.233 2.233 0 0 0 21.472 27.425 Q 20.82 27.516 19.177 27.927 A 97.932 97.932 0 0 0 18.421 28.12 A 27.816 27.816 0 0 1 16.528 28.545 Q 15.633 28.711 14.844 28.784 A 12.701 12.701 0 0 1 13.681 28.84 A 19.375 19.375 0 0 1 9.632 28.443 Q 7.106 27.903 5.193 26.63 A 10.948 10.948 0 0 1 3.581 25.32 A 11.042 11.042 0 0 1 0.868 20.832 Q 0.285 19.074 0.094 16.928 A 24.668 24.668 0 0 1 0.001 14.74 A 21.415 21.415 0 0 1 0.403 10.454 Q 0.938 7.838 2.182 5.834 A 11.674 11.674 0 0 1 3.741 3.84 A 12.435 12.435 0 0 1 10.625 0.271 A 17.817 17.817 0 0 1 13.801 0 Q 16.241 0 18.701 0.62 A 102.543 102.543 0 0 0 19.551 0.831 Q 21.028 1.19 21.46 1.234 A 1.023 1.023 0 0 0 21.561 1.24 Q 21.816 1.24 21.989 1.167 A 0.604 0.604 0 0 0 22.161 1.06 Q 22.338 0.901 22.547 0.536 A 5.162 5.162 0 0 0 22.601 0.44 L 23.041 0.44 L 23.361 9.12 L 22.641 9.12 Q 21.23 6.328 19.809 4.395 A 18.767 18.767 0 0 0 18.701 3.02 A 7.785 7.785 0 0 0 17.285 1.756 A 5.238 5.238 0 0 0 14.281 0.8 A 4.931 4.931 0 0 0 9.643 3.884 Q 8.161 6.874 8.161 12.76 L 8.161 15.92 A 38.793 38.793 0 0 0 8.279 19.063 Q 8.582 22.781 9.661 24.98 A 7.118 7.118 0 0 0 10.607 26.459 A 4.218 4.218 0 0 0 13.961 28.04 A 8.344 8.344 0 0 0 14.75 28.006 Q 15.556 27.929 16.022 27.68 A 1.298 1.298 0 0 0 16.461 27.32 Q 17.001 26.6 17.001 24.88 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});