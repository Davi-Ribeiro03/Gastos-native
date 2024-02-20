import AsyncStorage from "@react-native-async-storage/async-storage";

const UseStorageReceitas = () => {
  const getItem = async (key) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return parseFloat(JSON.parse(item)) || 0;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const saveItem = async (key, value) => {
    try {
      await removeItem(key);
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { getItem, saveItem, removeItem };
};

export default UseStorageReceitas;
