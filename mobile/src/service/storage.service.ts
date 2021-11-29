import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
  constructor() {}

  _storeData = async (data: any) => {
    try {
      return await AsyncStorage.setItem("storage", String(data));
    } catch (error) {
      console.log(error);
    }
  };

  _recieveData = async () => {
    try {
      return await AsyncStorage.getItem("storage");
    } catch (error) {
      throw new Error("error failed");
    }
  };
}

export default StorageService;
