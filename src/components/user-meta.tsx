import React from 'react'
import { UserButton,useUser  } from "@clerk/nextjs";
import Link from 'next/link';

export default function userMeta() {
  const { isSignedIn, user } = useUser();
    if (isSignedIn && user.primaryEmailAddress) {
      console.log(user.primaryEmailAddress.emailAddress)
        return (
            <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                    <div>
                       <UserButton afterSignOutUrl="/" />
                    </div>
                    <div className="ml-3">
                       <p className="text-sm font-medium text-white">{user.fullName}</p> 
                      <Link href="/user-profile">
                        <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                      </Link>
                    </div>
                </div>
            </div>
            
        );
      }
}
