import { ReactNode } from "react";

import { Navigate, Outlet } from "react-router-dom";

interface protectedRoutesInterface {
  user: object;
  children: ReactNode;
  redirect?: "string";
}

export const ProtectedRoute = (props: protectedRoutesInterface) => {

  const { user, children, redirect = "/" } = props;
  if (!user) {
    return <Navigate to={redirect} />;
  }
  return children ? children : <Outlet />;
};