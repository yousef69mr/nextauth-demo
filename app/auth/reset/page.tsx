import ResetForm from "@/components/forms/reset-form";
import CardWrapper from "@/components/helpers/card-wrapper";

const ResetPage = () => {
  return (
    <CardWrapper
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      headerLabel="Forgot your password?"
    >
      <ResetForm />
    </CardWrapper>
  );
};

export default ResetPage;
