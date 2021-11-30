import { useQuery } from "react-query";
import StorageService from "../../../service/storage.service";

function getTokenInfo() {
  const instanceStorage = new StorageService();
  const { data, isSuccess } = useQuery("token", instanceStorage._recieveData);
  return { token: data, isExist: isSuccess };
}

export { getTokenInfo };
