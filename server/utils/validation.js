exports.validateRegister = (body) => {
  const { email, password, passwordConfirm } = body
  if (!email) return { error: true, message: 'Email cannot be emptied!' }
  if (!password) return { error: true, message: 'Password cannot be emptied!' }
  if (!passwordConfirm) return { error: true, message: 'Confirm password cannot be emptied!' }
  if (passwordConfirm !== password) return { error: true, message: 'The password and confirm password should be similar.' }
  if (password.length < 6) return { error: true, message: 'Password should contains 6 characters.' }

  return { error: false, message: 'OK' }
}

exports.validateLogin = (body) => {
  const { email, password } = body
  if (!email) return { error: true, message: 'Email cannot be emptied!' }
  if (!password) return { error: true, message: 'Password cannot be emptied!' }
  if (password.length < 6) return { error: true, message: 'Password should contains 6 characters.' }

  return { error: false, message: 'OK' }
}

exports.validateAdminInput = (body) => {
  const { email, firstName, lastName, phone } = body
  if (!email) return { error: true, message: 'Email cannot be emptied!' }
  if (!firstName) return { error: true, message: 'First name cannot be emptied!' }
  if (!lastName) return { error: true, message: 'Last name cannot be emptied!' }

  return { error: false, message: 'OK' }
}