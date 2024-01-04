"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { deleteUserById } from "@/lib/actions/models/user";
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import { toast } from "sonner";

interface Props {
  label: string;
  description: string;
  buttonLabel: string;
  type: "delete_user";
}

const SettingCard = (props: Props) => {
  const { label, buttonLabel, description, type } = props;
  const user = useCurrentUser();

  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    switch (type) {
      case "delete_user": {
        startTransition(async () => {
          await deleteUserById(user?.id || "").then((data) => {
            if (data?.success) {
              toast.success(data.success);
              signOut();
            } else {
              toast.error(data.error);
            }
          });
        });
        break;
      }
      default:
        return;
    }
  };
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <div className="space-y-0.5">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        <p className="text-[0.8rem] text-muted-foreground">{description}</p>
      </div>
      <Button
        variant={"destructive_outlined"}
        disabled={isPending}
        type="button"
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default SettingCard;
