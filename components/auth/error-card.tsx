import CardWrapper from "@/components/helpers/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      headerMainLabel="🔐 Auth"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex w-full justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive h-5 w-5" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
