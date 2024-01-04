import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import UserButton from "@/components/auth/user-button";

import NavbarMainRoutes from "./navbar-main-routes";
import { currentUser } from "@/lib/auth";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="min-w-[600px] gap-x-5 p-4 rounded-xl h-[80px] flex items-center justify-between bg-secondary shadow-sm sticky top-3">
      <NavbarMainRoutes />
      {user ? (
        <UserButton />
      ) : (
        <LoginButton>
          <Button type="button">Sign in</Button>
        </LoginButton>
      )}
    </nav>
  );
};

export default Navbar;
