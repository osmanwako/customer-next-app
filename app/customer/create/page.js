"use client";
import Link from "next/link";
import { useState } from "react";

const CustomerForm = () => {
  const [message, setMessage] = useState("");

  const create = async (form) => {
    try {
      
      const customer = {
        firstname: form.get('firstname'),
        middlename: form.get('middlename'),
        lastname: form.get('lastname'),
        phone: form.get('phone'),
        birthdate: form.get('birthdate'),
        gender: form.get('gender'),
        published: form.get('published')?true:false,
      };
      
      if (isInvalid(customer)) {
        return;
      }
      const response = await fetch(`/api/customer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      console.log(response);
      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
      } else {
        setMessage("Invalid response");
      }
    } catch (error) {
      setMessage(() => `An error occurred ${error.message}`);
    }
  };
  const isInvalid = (customer) => {
    setMessage("");
    if (customer.firstname == undefined) {
      setMessage("First Name is required");
    } else if (
      customer.firstname.length < 2 ||
      customer.firstname.length > 15
    ) {
      setMessage("First Name should be between 2 and 15 characters.");
    } else if (customer.middlename == undefined) {
      setMessage("Middle Name is required");
    } else if (
      customer.middlename.length < 2 ||
      customer.middlename.length > 15
    ) {
      setMessage("Middle Name should be between 2 and 15 characters.");
    } else if (customer.lastname == undefined) {
      setMessage("Last Name is required");
    } else if (customer.lastname.length < 2 || customer.lastname.length > 15) {
      setMessage("Last Name should be between 2 and 15 characters.");
    } else if (customer.phone == undefined) {
      setMessage("Phone is required");
    } else if (!(customer.phone.length == 10 || customer.phone.length == 13)) {
      setMessage("Phone should be between 10 and 13 characters.");
    } else if (customer.birthdate == undefined) {
      setMessage("Birth date is required");
    } else if (customer.birthdate.length != 10) {
      setMessage("Birth date is invalid.");
    } else if (customer.gender == undefined) {
      setMessage("Gender is required");
    } else if (customer.published == undefined) {
      setMessage("Published field is required");
    } else {
      return false;
    }
    return false;
  };

  return (
    <form action={create}>
      <div className="max-w-3xl mx-auto mt-8 p-4 border rounded shadow grid grid-cols-2 gap-4">
        <div className="col-span-2 mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
          <Link href="/customer/list" className="text-blue-500 hover:underline">
            View Customer
          </Link>
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="firstname"
            className="block text-sm font-semibold text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            min="2"
            max="15"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="middlename"
            className="block text-sm font-semibold text-gray-600"
          >
            Second Name
          </label>
          <input
            type="text"
            id="middlename"
            name="middlename"
            required
            min="2"
            max="15"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="lastname"
            className="block text-sm font-semibold text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            min="2"
            max="15"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-600"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            min="10"
            max="13"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="birthdate"
            className="block text-sm font-semibold text-gray-600"
          >
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="gender"
            className="block text-sm font-semibold text-gray-600"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4 col-span-1">
          <label htmlFor="published" className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              className="mr-2 focus:outline-none focus:border-blue-500"
            />
            <span className="text-sm font-semibold text-gray-600">
              Published
            </span>
          </label>
        </div>

        <div className="col-span-2">
          <button type="submit"
            className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow"
          >Save
          </button>
        </div>
        <span className="col-span-2">{message}</span>
      </div>
    </form>
  );
};

export default CustomerForm;
