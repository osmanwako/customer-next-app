import React from 'react';
import Link from "next/link";
import Customer from './customer';

const Customers = (props) => {
  const {customers} = props;

  return (
    <div className="mx-auto mt-2 p-4 border rounded shadow">
      <div className="col-span-2 mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Customer List</h2>
          <Link href="/customer/create" className="text-blue-500 hover:underline">
            Add Customer
          </Link>
        </div>

      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="p-2 border border-gray-400">First Name</th>
            <th className="p-2 border border-gray-400">Middle Name</th>
            <th className="p-2 border border-gray-400">Last Name</th>
            <th className="p-2 border border-gray-400">Phone</th>
            <th className="p-2 border border-gray-400">Birthdate</th>
            <th className="p-2 border border-gray-400">Gender</th>
            <th className="p-2 border border-gray-400">Published</th>
            <th className="p-2 border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <Customer customer={customer} key={customer.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;