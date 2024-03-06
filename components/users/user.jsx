"use client"
import Link from "next/link";

export default function User({user}) {
return (
    <tbody>
    <tr>
    <td>{user.firstname}</td>
    <td>{user.midname}</td>
    <td>{user.username}</td>
    <td>{user.role}</td>
    <td>{user.status}</td>
    <td>
    <Link href="/user" className="td-link link-view">View</Link>
        <Link href="/user" className="td-link link-edit">Edit</Link>
    </td>
    </tr>
</tbody>
);
}