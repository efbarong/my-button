import React from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontWeight: 600,
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.1s",
    outline: "none",
  },
  primary: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: "#e5e7eb",
    color: "#111827",
  },
  danger: {
    backgroundColor: "#dc2626",
    color: "#ffffff",
  },
  sm: { fontSize: "12px", padding: "6px 12px", height: "30px" },
  md: { fontSize: "14px", padding: "8px 16px", height: "36px" },
  lg: { fontSize: "16px", padding: "10px 20px", height: "44px" },
  disabled: { opacity: 0.5, cursor: "not-allowed" },
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  style,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        ...(isDisabled ? styles.disabled : {}),
        ...style,
      }}
    >
      {loading ? "Loading…" : children}
    </button>
  );
};
