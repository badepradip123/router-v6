import React from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./components/Home/Home";
import User from "./components/Users/User";
import Users from "./components/Users/Users";
import { Layout } from "./Theme";

const App = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate("/users");
  };
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
        <Route path='users' element={<Users users={users} />}></Route>
        <Route
          path='users/:userId'
          element={<User onRemoveUser={handleRemoveUser} />}
        />
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default App;
