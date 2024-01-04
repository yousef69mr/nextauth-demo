import LoginForm from "@/components/forms/login-form";
import CardWrapper from "@/components/helpers/card-wrapper";

const LoginPage = () => {
  return (
    <CardWrapper
      headerMainLabel="🔐 Auth"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default LoginPage;
