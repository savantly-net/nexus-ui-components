export type ColorType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export const colorOptions: ColorType[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

export const colorsEnum = {
  primary: "primary" as ColorType,
  secondary: "secondary" as ColorType,
  tertiary: "tertiary" as ColorType,
  success: "success" as ColorType,
  danger: "danger" as ColorType,
  warning: "warning" as ColorType,
  info: "info" as ColorType,
  light: "light" as ColorType,
  dark: "dark" as ColorType,
};

export const formatBGColor = (color: ColorType | "none" | string) => {
  if (color === "none") {
    return "";
  }
  // if it's a named color, return the bg-<color> class
  if (colorOptions.includes(color as ColorType)) {
    return `bg-${color}`;
  }
  // otherwise, return the color itself
  return `bg-[${color}]`;
};
