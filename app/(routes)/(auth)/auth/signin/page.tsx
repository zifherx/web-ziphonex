import { Metadata } from "next";
import { SignInView } from "./components/Sign-In-View";

export const metadata: Metadata = {
  title: {
    default: "Login",
    template: "",
  },
};

export default function SignIPage() {
  return <SignInView />;
}
