import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  return (
    <div className="flex h-screen">
      {/* <Sidebar isOpen={isSidebarOpen} setOpen={setIsSidebarOpen} /> */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
