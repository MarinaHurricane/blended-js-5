// Save data to localStorage
export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  // Get data from localStorage
  export function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // return null if nothing stored
  };