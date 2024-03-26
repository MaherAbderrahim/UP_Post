import { UserProfile } from "@clerk/nextjs";

const page = () => {
    return (
        <div className="flex flex-center justify-center">
            <UserProfile  />
        </div>
    );
};  
export default page;  