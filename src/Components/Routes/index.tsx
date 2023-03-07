import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import GuestGuard from "../guards/GuestGuard";
import React from "react";
import ChatPage from "../chats/ChatPage";
import LoginGuard from "../guards/LoginGuard";
import MainLayout from "../layoutes/MainLayout";

export default function Router () {
  return useRoutes([
    {
      path: "/auth",
      element:<MainLayout/>,
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "signup",
          element: (
            <GuestGuard>
              <Signup />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "chat",
      element: (
        <LoginGuard>
          <ChatPage />
        </LoginGuard>
      ),
    },
  ]);
}
