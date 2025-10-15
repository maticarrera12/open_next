import { ElementType, ComponentProps } from "react";
import { Github as GithubIcon, Chrome as GoogleIcon } from "lucide-react";

export const SUPPORTED_OAUTH_PROVIDERS = ["google", "github"] as const;

export type SupportedOAuthProviders =
  (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const SUPPORTED_OAUTH_PROVIDERS_DETAILS: Record<
  SupportedOAuthProviders,
  {
    name: string;
    Icon: ElementType<ComponentProps<"svg">>;
  }
> = {
  google: {
    name: "Google",
    Icon: GoogleIcon,
  },
  github: {
    name: "GitHub",
    Icon: GithubIcon,
  },
};
