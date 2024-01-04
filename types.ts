export type VerificationTokenType = {
  email: string;
  token: string;
  expires: Date;
};

export type PasswordRestTokenType = {
  email: string;
  token: string;
  expires: Date;
};

export type TwoFactorTokenType = {
  email: string;
  token: string;
  expires: Date;
};

export type TwoFactorConfirmationType = {
  userId: string;
};
