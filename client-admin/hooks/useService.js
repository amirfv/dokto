import { useEffect, useState } from "react";
import { apis } from "../utils/endpoints";
import { validateService } from "../utils/validation";

export default function useService() {
  const [toggleInput, setToggleInput] = useState("");
  const [input, setInput] = useState({});
  const [error, setError] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState({});

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    const response = await apis.symptomFindAll();
    if (response.error) return setError(response.message || "Something went wrong!");
    return setSymptoms(response);
  };

  const fetchOneSymptom = async (symptomId) => {
    const response = await apis.symptomFindOne(symptomId);
    if (response.error) return setError(response.message || "Something went wrong!");
    setInput({ symptomName: response.name, symptomDescription: response.description });
    return setSelectedSymptom(response);
  };

  const handleShowInput = (type) => {
    if (toggleInput !== type) {
      setError("");
      setInput({});
    }
    if (selectedSymptom._id) setSelectedSymptom({});
    setToggleInput(type);
  };
  const handleInput = ({ currentTarget }) => setInput({ ...input, [currentTarget.id]: currentTarget.value });

  const handleAddService = async (data) => {
    let response;
    if (data.type === "symptom") response = await apis.symptomCreate(data);
    if (response.error) return setError(response.message || "Something went wrong!");
  };

  const handleEditService = async (data, id) => {
    let response;
    if (data.type === "symptom") response = await apis.symptomUpdate(data, id);
    if (response.error) return setError(response.message || "Something went wrong!");
  };

  const handleSubmit = async () => {
    if (toggleInput === "service") {
      const serviceInput = {
        name: input.serviceName,
        description: input.serviceDescription,
        type: toggleInput,
      };
      const { error, message } = validateService(serviceInput);
      if (error) return setError(message);
      await handleAddService(serviceInput);
    }
    if (toggleInput === "symptom") {
      const symptomInput = {
        name: input.symptomName,
        description: input.symptomDescription,
        type: toggleInput,
      };
      const { error, message } = validateService(symptomInput);
      if (error) return setError(message);

      if (!selectedSymptom._id) await handleAddService(symptomInput);
      if (selectedSymptom._id) await handleEditService(symptomInput, selectedSymptom._id);

      await fetchSymptoms();
      setInput({});
      setToggleInput("");
    }
  };

  const handleEdit = async (selectedType, id) => {
    if (selectedType === "service") {
    }

    if (selectedType === "symptom") {
      await fetchOneSymptom(id);
      setError("");
      setToggleInput("symptom");
    }
  };

  const handleRemove = async (selectedType, id) => {
    if (selectedType === "service") {
    }

    if (selectedType === "symptom") {
      await apis.symptomRemove(id);
      await fetchSymptoms();
    }
  };

  return { symptoms, toggleInput, setToggleInput, input, setInput, error, handleInput, handleShowInput, handleSubmit, handleEdit, handleRemove, fetchSymptoms };
}
