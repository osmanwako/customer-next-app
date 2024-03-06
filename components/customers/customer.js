"use client"
import Link from "next/link";

export default function customer({customer}) {
return (
    <tbody>
    <tr>
    <td>{customer.firstname}</td>
    <td>{customer.midname}</td>
    <td>{customer.lastname}</td>
    <td>{customer.phone}</td>
    <td>{customer.gender}</td>
    <td>
    <Link href="/customer" className="td-link link-view">View</Link>
        <Link href="/customer" className="td-link link-edit">Edit</Link>
    </td>
    </tr>
</tbody>
);
}