export default function Customer(prop){
    const {customer}=prop;
    return (
        <tr>
              <td className="p-2 border border-gray-400">{customer.firstname}</td>
              <td className="p-2 border border-gray-400">{customer.middlename}</td>
              <td className="p-2 border border-gray-400">{customer.lastname}</td>
              <td className="p-2 border border-gray-400">{customer.phone}</td>
              <td className="p-2 border border-gray-400">{customer.birthdate}</td>
              <td className="p-2 border border-gray-400">{customer.gender}</td>
              <td className="p-2 border border-gray-400">{customer.published ? 'Yes' : 'No'}</td>
              <td className="p-2 border border-gray-400">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
    );
};