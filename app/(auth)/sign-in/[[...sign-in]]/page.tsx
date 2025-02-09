import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main 
      className="auth-page bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/icons/background.svg')" }}
    >
      <SignIn/>
      {/* <Link href="https://www.linkedin.com/in/omerafzaal1" target="_blank">
      <p className="text-xs text-gray-200 font-normal italic underline">
        <span>
        <Image 
        src="/rounded-linkedin.svg"
        alt="linkedin"
        width={20}
        height={20}
      />
        </span>in/omerafzaal1</p>
      </Link> */}
    </main>
  )
}
//"url('/assets/images/background.jpg')"