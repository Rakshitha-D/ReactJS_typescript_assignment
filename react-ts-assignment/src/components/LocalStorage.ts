export const setUsers = (users: string) => {
  const registeredUsers = JSON.parse(localStorage.getItem("users") || "[]");
  registeredUsers.push(users);
  localStorage.setItem("users", JSON.stringify(registeredUsers));
};

export const getUsers = () => {
  const registeredUsers = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(registeredUsers);
  return registeredUsers;
};
