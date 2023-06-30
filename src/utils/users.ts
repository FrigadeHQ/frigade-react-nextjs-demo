import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

const lowerCaseName: string = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals],
  style: 'lowerCase',
  separator: '-',
});

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
  // Refresh the page
  window.location.href = '/';
}

function generateNewUserId() {
  localStorage.setItem(localStorageFieldUserId, getRandomString());
}

function generateNewOrganizationId() {
  localStorage.setItem(localStorageFieldOrgId, `${getRandomString()}'s org`);
}

function getRandomString() {
  return lowerCaseName;
}
