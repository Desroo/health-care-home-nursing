const KEY_NAME = "HC_ADMIN_KEY";

export function getAdminKey() {
  return sessionStorage.getItem(KEY_NAME) || "";
}

export function setAdminKey(key) {
  sessionStorage.setItem(KEY_NAME, key);
}

export function clearAdminKey() {
  sessionStorage.removeItem(KEY_NAME);
}

export function isAdminLoggedIn() {
  return !!getAdminKey();
}
