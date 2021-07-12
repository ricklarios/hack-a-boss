export default function getJWTFromAuthHeader(authHeader = "") {
  const bearerHeader = "Bearer ";
  const isAuthHeaderWellFormed = authHeader.startsWith(bearerHeader);
  if (isAuthHeaderWellFormed) {
    return authHeader.split(bearerHeader)[1];
  }

  return "";
}
