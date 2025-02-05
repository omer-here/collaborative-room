import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main
      className="auth-page bg-cover bg-center "
      style={{ backgroundImage: "url('/assets/icons/background.svg')" }}
    >
        <SignUp />
    </main>
  )
}