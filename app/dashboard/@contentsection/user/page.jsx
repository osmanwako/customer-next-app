import UsersList from "@/components/users/lists";
import { getUsers } from "./action";

export default async function UserPage(){
    const users=await getUsers();
    return <UsersList users={users}/>
}