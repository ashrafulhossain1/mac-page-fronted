export type TAuthDataType = {
  authType: "guest" | "host";

  guestData?: {
    fullName: string;
    university: string;
    dateOfBirth: string;
    nationality: string;
    selfDescription?: string;

    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword?: string;
    isTermsAccepted: boolean;
    emailVerificationCode?: string;
  };

  hostData?: {
    fullName: string;
    phoneNumber: string;
    bio?: string;

    country: string;
    city: string;
    fullAddress: string;
    postalCode: string;
    isLegalResidenceConfirmed: boolean;

    governmentIdFile: File | string;
    selfieWithIdFile: File | string;

    email: string;
    password: string;
    confirmPassword?: string;
    isTermsAccepted: boolean;
    emailVerificationCode?: string;
  };
};
