import { useState } from "react";
import { validateService } from "../utils/validation";

export default function useServiceAdd() {
  const [toggleInput, setToggleInput] = useState("");
  const [input, setInput] = useState({});
  const [error, setError] = useState("");

  const handleShowInput = (type) => {
    if (toggleInput !== type) {
      setError("");
      setInput({});
    }
    setToggleInput(type);
  };
  const handleInput = ({ currentTarget }) => setInput({ ...input, [currentTarget.id]: currentTarget.value });

  const handleAddService = async () => {
    console.log("WAIT FOR APIS");
  };

  const handleSubmit = async () => {
    if (toggleInput === "service") {
      const serviceInput = {
        name: input.serviceName,
        description: input.serviceDescription,
        type: toggleInput,
      };
      const { error, message } = validateService(serviceInput);
      if (error) setError(message);
      await handleAddService();
    }
    if (toggleInput === "symptom") {
      const symptomInput = {
        name: input.symptomName,
        description: input.symptomDescription,
        type: toggleInput,
      };
      const { error, message } = validateService(symptomInput);
      if (error) setError(message);
      await handleAddService();
    }
  };

  return { toggleInput, setToggleInput, input, setInput, error, handleInput, handleShowInput, handleSubmit };
}
