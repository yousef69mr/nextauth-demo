import SettingsForm from "@/components/forms/settings-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { currentUser } from "@/lib/auth";

const SettingsPage = async () => {
  const user = await currentUser();
  return (
    <Card className="w-full max-w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <SettingsForm initialData={user} />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
