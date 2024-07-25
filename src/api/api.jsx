export const login = (email, password) => {
  return fetch("https://blog-api-production-485b.up.railway.app/user/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};
