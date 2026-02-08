export function login(email, password) {
  if (
    email === "m@gmail.com" &&
    password === "123456"
  ) {
    return {
      success: true,
      user: { email },
    };
  }

  return {
    success: false,
    message: "Invalid email or password",
  };
}
