import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="purple-haze">{children}</div>;
};

export default Layout;
