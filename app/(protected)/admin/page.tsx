import { RoleGate } from "@/components/auth/role-gate";
import UserInfo from "@/components/auth/user-info";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { currentUser } from "@/lib/auth";
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
  const user = await currentUser();
  return (
    <Card className="w-full max-w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <UserInfo label="" user={user} />
        </RoleGate>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
