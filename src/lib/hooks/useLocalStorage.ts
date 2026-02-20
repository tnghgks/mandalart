export default function useLocalStorage() {
  const getItem = (key: string) => {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  const setItem = (key: string, data: any) => {
    try {
      const stringifiedData = JSON.stringify(data);
      localStorage.setItem(key, stringifiedData);
    } catch (error) {
      console.error(error);
    }
  };

  return { getItem, setItem };
}
