import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex flex-col items-center text-center mt-31 mr-20"><UserProfile path="/user-profile" /></div>
);

export default UserProfilePage;