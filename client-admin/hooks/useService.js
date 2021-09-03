import { useState } from "react";

export default function useService() {
  const [toggleInput, setToggleInput] = useState("");
  const [input, setInput] = useState({});

  const handleShowInput = (type) => setToggleInput(type);
  const handleInput = ({ currentTarget }) => setInput({ ...input, [currentTarget.id]: currentTarget.value });

  return { toggleInput, setToggleInput, input, setInput, handleInput, handleShowInput };
}
