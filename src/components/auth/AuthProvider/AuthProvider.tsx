import { auth } from "../../../firebase/firebase";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactChild | React.ReactChildren;
}

export const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
