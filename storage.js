const TASKS_STORAGE_KEY = "kanban_tasks";

/**
 * Save tasks array to localStorage.
 * @param {Array} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Load tasks array from localStorage.
 * @returns {Array}
 */
export function loadTasksFromStorage() {
  const data = localStorage.getItem(TASKS_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}