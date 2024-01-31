import  { useState } from "react";

type AuthType = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthType | null>(null);

  const handleLogin = () => {
    setUser({
      name: "shiv",
      email: "shiv@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is</div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default User;
