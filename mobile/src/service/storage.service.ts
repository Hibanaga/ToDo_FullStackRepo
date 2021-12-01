import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
  constructor() {}
  _storeData = async (data: string | undefined) => {
    try {
      return await AsyncStorage.setItem("storage", String(data));
    } catch (error) {
      throw new Error("error to store");
    }
  };
  _recieveData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("storage");
      return jsonValue !== undefined ? Promise.resolve(jsonValue) : undefined;
    } catch (error) {
      throw new Error("error failed");
    }
  };
}

export default StorageService;
