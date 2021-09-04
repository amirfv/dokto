import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apis } from "../../utils/endpoints";
import { routes } from "../../utils/routes";

export const useHeader = () => {
  const [toggle, setToggle] = useState(false);
  const { push, pathname } = useRouter();

  useEffect(() => {
    const outsideEl = (e) => {
      if (
        document.getElementById("menu-button") &&
        !document.getElementById("menu-button").contains(e.target)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("click", outsideEl);
    return () => document.removeEventListener("click", outsideEl);
  }, [toggle]);

  const handleLogout = async (e) => {
    await apis.logout();
    push("/");
  };

  const pageName = routes.map((route) => route.path === pathname && route.name);

  return { toggle, setToggle, handleLogout, pageName };
};
