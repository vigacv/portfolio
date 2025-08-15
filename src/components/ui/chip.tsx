type ChipProps = {
    label: string;
    color?: "primary" | "secondary" | "tertiary";
};

export default function Chip({ label, color = "primary" }: ChipProps) {
    return (
        <span style={{
            borderRadius: "9999px",
            borderWidth: "1px",
            borderStyle: "solid",
            backgroundColor: color === "primary" ? "color-mix(in srgb, var(--primary), transparent 90%)" : color === "secondary" ? "color-mix(in srgb, var(--purple-vibrant), transparent 90%)" : "color-mix(in srgb, var(--foreground), transparent 90%)",
            borderColor: color === "primary" ? "color-mix(in srgb, var(--primary), transparent 50%)" : color === "secondary" ? "color-mix(in srgb, var(--purple-vibrant), transparent 50%)" : "color-mix(in srgb, var(--foreground), transparent 50%)",
            padding: "0.125rem 0.625rem",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            color: color === "primary" ? "var(--primary)" : color === "secondary" ? "var(--purple-vibrant)" : "var(--foreground)",
        }}>
            {label}
        </span>
    );
};