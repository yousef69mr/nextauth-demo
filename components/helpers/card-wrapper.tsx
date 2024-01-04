import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "./header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerMainLabel?: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = (props: CardWrapperProps) => {
  const {
    children,
    headerLabel,
    headerMainLabel,
    backButtonHref,
    backButtonLabel,
    showSocial,
  } = props;

  const title = headerMainLabel || "🔐Auth";
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={title} subtitle={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
