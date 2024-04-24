import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex flex-col items-center text-center mt-32"><SignIn path="/sign-in" /></div>;
    
}