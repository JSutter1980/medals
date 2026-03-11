import { jwtDecode } from "jwt-decode";

// convert string to title case
export const tc = (str) =>
  str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );

export function getUser(encoded) {
  const decoded = jwtDecode(encoded);

  // ASP.NET Core may serialize multiple same-name claims as an array or a single string
  const rawRoles = decoded["roles"] ?? [];
  const roles = Array.isArray(rawRoles) ? rawRoles : [rawRoles];

  return {
    name: decoded["username"],
    authenticated: true,
    canPost: roles.includes("medals-post"),
    canPatch: roles.includes("medals-patch"),
    canDelete: roles.includes("medals-delete"),
  };
}