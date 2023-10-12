import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PhoneLayout from "./components/iPhone/PhoneLayout";
import ChatList from "./pages/ChatList";
import FriendsList from "./pages/FriendsList";
import MyProfile from "./pages/MyProfile";
import ChatRoom from "./pages/ChatRoom";
import { chatRoomState } from "./state/chatRoomState";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<ChatList />} />
          <Route path="/friends-list" element={<FriendsList />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route
            path={`/chatroom/${chatRoomState.MAIN}/:id`}
            element={<ChatRoom />}
          />
          <Route
            path={`/chatroom/${chatRoomState.SUB}/:id`}
            element={<ChatRoom />}
          />
          <Route
            path={`/chatroom/${chatRoomState.FRIEND}/:id`}
            element={<ChatRoom />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
