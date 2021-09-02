import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apis } from "../utils/endpoints";
import { validateLogin, validateRegister } from "../utils/validation";

export default function useAuthInputSubmit() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [input, setInput] = useState({});
  const [error, setError] = useState("");

  const { push } = useRouter();

  useEffect(() => {
    if (error && (input?.email !== "" || input?.password !== "")) setError("");
  }, [input, isLoginForm]);

  const handleInput = ({ currentTarget }) => {
    setInput({ ...input, [currentTarget.id]: currentTarget.value });
  };

  const handleLogin = async () => {
    const response = await apis.login(input);
    if (response.error) setError(response.message);
  };

  const handleRegister = async () => {
    let response = await apis.register(input);
    if (response.error) setError(response.message);

    response = await apis.adminCreate(input);
    if (response.error) setError(response.message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginForm) {
      const { error, message } = validateLogin(input);
      if (error) return setError(message);
      await handleLogin();
    }
    if (!isLoginForm) {
      const { error, message } = validateRegister(input);
      if (error) return setError(message);
      await handleRegister();
    }
    push("/");
  };

  return { isLoginForm, setIsLoginForm, input, handleInput, handleSubmit, error, setError };
}
