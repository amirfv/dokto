export default function ServiceHeader({ type, title, btnName, showInput, handleShowInput }) {
  return (
    <div className="mb-4 flex items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      {showInput !== type && (
        <button id={type} className="ml-auto py-2 px-4 rounded-lg flex items-center bg-primary-500 text-white hover:bg-primary-700" onClick={({ currentTarget }) => handleShowInput(currentTarget.id)}>
          <span className="mr-3">{btnName}</span>
          <i className="fas fa-plus"></i>
        </button>
      )}
    </div>
  );
}
