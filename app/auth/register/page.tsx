import RegisterForm from "@/components/forms/register-form";
import CardWrapper from "@/components/helpers/card-wrapper";

const RegisterPage = () => {
  return (
    <CardWrapper
      headerMainLabel="🔐 Auth"
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <RegisterForm />
    </CardWrapper>
  );
};

export default RegisterPage;
