import Link from "next/link";
import { UserButton, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
export default async function Navbar()  {
    const user = await currentUser();
  return (
    <div>
        <ul className="flex justify-between m-10 items-center">
            <div >
                <Link href="/">
                    <li>Home</li>
                </Link>
            </div>
            <div className="flex gap-10">
                {user ? (
                    console.log(user),
                    console.log("this is the user email " + user.emailAddresses[0].emailAddress),
                    console.log("this is the user profile creation date  " + user.
                    createdAt),
                    console.log("this is the user update date " + user.updatedAt),
                    
                    <>
                        <Link href="/dashboard">
                            <li>Dashboard</li>
                        </Link>
                        <Link href="/profile">
                            <li>Profile</li>
                        </Link>
                        <li>
                            <UserButton afterSignOutUrl="/" />  
                        </li>
                    </>

                ):(
                    <>
                        <Link href="/sign-in">
                            <li>Login</li>
                        </Link>
                        <Link href="/sign-up">
                            <li>Sign Up</li>
                        </Link>
                    </>
                )}
                
            </div>
        </ul>
    </div>
  )
}