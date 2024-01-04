import Navbar from "@/components/navigation/navbar";
import { SessionProvider } from "next-auth/react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="!min-h-full w-full flex flex-col gap-y-10 items-center justify-center py-4">
      <SessionProvider>
        <Navbar />
        <main className="w-full flex items-center justify-center">{children}</main>
      </SessionProvider>
    </div>
  );
};

export default ProtectedLayout;
