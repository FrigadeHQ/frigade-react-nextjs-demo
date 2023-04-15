const localStorageFieldUserId = 'frigadeUserId';
const localStorageFieldOrgId = 'frigadeOrgId';

export function getUserId(): string {
  if (typeof window === 'undefined' || !window.localStorage) {
    return 'unknown';
  }
  if (!localStorage.getItem(localStorageFieldUserId)) {
    generateNewUserId();
  }
  return localStorage.getItem(localStorageFieldUserId) ?? 'unknown';
}

export function getOrganizationId(): string {
  if (typeof window === 'undefined' || !window.localStorage) {
    return 'unknown';
  }
  if (!localStorage.getItem(localStorageFieldOrgId)) {
    generateNewOrganizationId();
  }
  return localStorage.getItem(localStorageFieldOrgId) ?? 'unknown';
}

export function resetAllIds() {
  localStorage.clear();
}

function generateNewUserId() {
  localStorage.setItem(localStorageFieldUserId, getRandomString());
}

function generateNewOrganizationId() {
  localStorage.setItem(localStorageFieldUserId, getRandomString());
}

function getRandomString() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
