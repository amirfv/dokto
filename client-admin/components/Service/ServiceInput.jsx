export default function ServiceInput({ type, input, handleInput, handleShowInput }) {
  return (
    <>
      <div className="px-4 pb-4">
        <div className="mb-4">
          <label htmlFor={`${type}Name`} className="capitalize block text-sm font-medium text-gray-700">
            {type} Name
          </label>
          <div className="mt-1">
            <input
              className="rounded-lg border-transparent flex-1 appearance-none border w-full py-2 px-4 shadow-sm text-base border-gray-400 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              type="text"
              placeholder="eg: Blood Test"
              id={`${type}Name`}
              value={input[`${type}Name`] || ""}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor={`${type}Description`} className="capitalize block text-sm font-medium text-gray-700">
            {type} Description
          </label>
          <div className="mt-1">
            <textarea
              className="rounded-lg border-transparent flex-1 appearance-none border w-full py-2 px-4 shadow-sm text-base border-gray-400 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              type="text"
              placeholder="eg: The blood test is to check the overall health condition based on the blood..."
              id={`${type}Description`}
              value={input[`${type}Description`] || ""}
              onChange={handleInput}
            ></textarea>
          </div>
        </div>
        <div className="flex">
          <button id={type} className="ml-auto mr-3 py-2 px-3 rounded-lg hover:bg-gray-100" onClick={handleShowInput}>
            Cancel
          </button>
          <button className="capitalize py-2 px-3 text-white rounded-lg bg-primary-500 hover:bg-primary-700">Save {type}</button>
        </div>
      </div>
    </>
  );
}
