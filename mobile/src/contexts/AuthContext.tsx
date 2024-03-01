import React, { useState, createContext } from "react";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export const AuthContext = createContext({} as AuthContextData);
