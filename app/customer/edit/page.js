import React from 'react';

const CustomerForm = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 border rounded shadow grid grid-cols-2 gap-4">
      <div className="col-span-2 mb-4">
        <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
      </div>

      <div className="mb-4 col-span-1">
        <label htmlFor="firstname" className="block text-sm font-semibold text-gray-600">
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4 col-span-1">
        <label htmlFor="secondname" className="block text-sm font-semibold text-gray-600">
          Second Name
        </label>
        <input
          type="text"
          id="secondname"
          name="secondname"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4 col-span-1">
        <label htmlFor="lastname" className="block text-sm font-semibold text-gray-600">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4 col-span-1">
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4 col-span-1">
        <label htmlFor="birthdate" className="block text-sm font-semibold text-gray-600">
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
        <label htmlFor="gender" className="block text-sm font-semibold text-gray-600">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
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
          <span className="text-sm font-semibold text-gray-600">Published</span>
        </label>
      </div>

      <div className="col-span-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomerForm;
