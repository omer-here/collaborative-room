import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main 
      className="auth-page bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/icons/background.svg')" }}
    >
      <SignIn/>
    </main>
  )
}
//"url('/assets/images/background.jpg')"