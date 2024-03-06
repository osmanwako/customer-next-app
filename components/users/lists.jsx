"use client"
import { MdSearch } from "react-icons/md";
import "./users.css";
import Link from "next/link";
import User from "./user";

export default function UsersList({users}) {

    return (
        <div className="user-container">
            <div className="user-search">
                <div className="search-input">
                    <MdSearch size={20} />
                    <input type="text" className="user-input" name="search" placeholder="User search..." id="user-search-id" />
                </div>
                <div className="search-button">
                    <Link href="/dashboard/add/user">
                    <button className="add-button">
                        Add New
                    </button>
                    </Link>
                </div>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {users.map((user)=>(
                   <User key={user.id} user={user} /> 
                ))}
               
            </table>
        </div>
    );

}
