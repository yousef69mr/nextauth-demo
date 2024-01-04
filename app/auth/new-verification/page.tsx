import NewVerificationForm from "@/components/forms/new-verification-form";
import CardWrapper from "@/components/helpers/card-wrapper";

const NewVerificationPage = () => {
  return (
    <CardWrapper
      headerLabel="confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
     <NewVerificationForm/>
    </CardWrapper>
  );
};

export default NewVerificationPage;
