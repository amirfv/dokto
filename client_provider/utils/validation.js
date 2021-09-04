export const validateRegister = (input) => {
  const { firstName, lastName, email, password, passwordConfirm } = input;
  if (!firstName) return { error: true, message: "First name cannot be emptied!" };
  if (!lastName) return { error: true, message: "Last name cannot be emptied!" };
  if (!email) return { error: true, message: "Email cannot be emptied!" };
  if (!password) return { error: true, message: "Password cannot be emptied!" };
  if (!passwordConfirm) return { error: true, message: "Confirm password cannot be emptied!" };
  if (passwordConfirm !== password) return { error: true, message: "The password and confirm password should be similar." };
  if (password.length < 6) return { error: true, message: "Password should contains 6 characters." };

  return { error: false, message: "OK" };
};

export const validateLogin = (input) => {
  const { email, password } = input;
  if (!email) return { error: true, message: "Email cannot be emptied!" };
  if (!password) return { error: true, message: "Password cannot be emptied!" };
  if (password.length < 6) return { error: true, message: "Password should contains 6 characters." };

  return { error: false, message: "OK" };
};

export const validateService = (input) => {
  const { name, description, type } = input;
  if (!name) return { error: true, message: `The ${type} name cannot be emptied!` };
  if (!description) return { error: true, message: `The ${type} description cannot be emptied!` };

  return { error: false, message: "OK" };
};
