import SettingsForm from "@/components/forms/settings-form";
import SettingCard from "@/components/helpers/setting-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { deleteUserById } from "@/lib/actions/models/user";
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
        <Separator />
        <SettingCard
          label="Delete this User"
          description="Once you delete a user, there is no going back. Please be certain."
          buttonLabel=" Delete User"
          type="delete_user"
        />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
