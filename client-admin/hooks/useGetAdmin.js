import { useEffect, useState } from "react";
import { apis } from "../utils/endpoints";

export default function useGetAdmin(user) {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    const { data: admin } = await apis.adminFindOne(user);
    setAdmin(admin.data[0]);
  };

  return { admin, setAdmin, getAdmin };
}
