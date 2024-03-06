"use client"
import { MdSearch } from "react-icons/md";
import "./customers.css";
import Link from "next/link";
import Customer from "./customer";

export default function Customers({customers}) {

    return (
        <div className="customer-container">
            <div className="customer-search">
                <div className="search-input">
                    <MdSearch size={20} />
                    <input type="text" className="customer-input" name="search" placeholder="customer search..." id="customer-search-id" />
                </div>
                <div className="search-button">
                    <Link href="/dashboard/add/customer">
                    <button className="add-button">
                        Add New
                    </button>
                    </Link>
                </div>
            </div>
            <table className="customer-table">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {customers.map((customer)=>(
                   <Customer key={customer.id} customer={customer} /> 
                ))}
               
            </table>
        </div>
    );

}
