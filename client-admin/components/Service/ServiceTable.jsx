export default function ServiceTable({ type }) {
  return (
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="max-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {/* <th className="w-1/12 py-3 px-6 tracking-wider uppercase font-medium text-gray-500 text-xs text-left">No.</th> */}
            <th className="w-1/4 py-3 px-6 tracking-wider uppercase font-medium text-gray-500 text-xs text-left">{type} Name</th>
            <th className="w-1/2 py-3 px-6 tracking-wider uppercase font-medium text-gray-500 text-xs text-left">Description</th>
            <th className="w-1/5 py-3 px-6 tracking-wider uppercase font-medium text-gray-500 text-xs text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-200">
          <tr>
            {/* <td className="py-3 px-6">1</td> */}
            <td className="py-3 px-6">Medical Checkup</td>
            <td className="py-3 px-6">Basic medical checkup to check the health condition of a single person.</td>
            <td className="py-3 px-6">
              <div className="flex gap-2 items-center w-full">
                <button className="w-full rounded-md py-2 px-3  text-primary-700 border border-primary-700 hover:bg-primary-500 hover:bg-opacity-10 hover:shadow">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="w-full rounded-md py-2 px-3  text-danger-700 border border-danger-700 hover:bg-danger-500 hover:bg-opacity-10 hover:shadow">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            {/* <td className="py-3 px-6">1</td> */}
            <td className="py-3 px-6">Medical Checkup</td>
            <td className="py-3 px-6">Basic medical checkup to check the health condition of a single person.</td>
            <td className="py-3 px-6">
              <div className="flex gap-2 items-center w-full">
                <button className="w-full rounded-md py-2 px-3  text-primary-700 border border-primary-700 hover:bg-primary-500 hover:bg-opacity-10 hover:shadow">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="w-full rounded-md py-2 px-3  text-danger-700 border border-danger-700 hover:bg-danger-500 hover:bg-opacity-10 hover:shadow">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            {/* <td className="py-3 px-6">1</td> */}
            <td className="py-3 px-6">Medical Checkup</td>
            <td className="py-3 px-6">Basic medical checkup to check the health condition of a single person.</td>
            <td className="py-3 px-6">
              <div className="flex gap-2 items-center w-full">
                <button className="w-full rounded-md py-2 px-3  text-primary-700 border border-primary-700 hover:bg-primary-500 hover:bg-opacity-10 hover:shadow">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="w-full rounded-md py-2 px-3  text-danger-700 border border-danger-700 hover:bg-danger-500 hover:bg-opacity-10 hover:shadow">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
