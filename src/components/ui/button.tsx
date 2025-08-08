import styles from './button.module.css';

type ButtonProps = {
  onClick?: () => void;
  iconName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  onClick,
  iconName,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      onClick={onClick}
      {...props}
    >
      <span className="material-symbols-outlined">{iconName}</span>
    </button>
  );

}