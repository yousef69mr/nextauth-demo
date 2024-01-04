import NewPasswordForm from "@/components/forms/new-password-form";
import NewVerificationForm from "@/components/forms/new-verification-form";
import CardWrapper from "@/components/helpers/card-wrapper";

const NewPasswordPage = () => {
  return (
    <CardWrapper
      headerLabel="confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <NewPasswordForm />
    </CardWrapper>
  );
};

export default NewPasswordPage;
