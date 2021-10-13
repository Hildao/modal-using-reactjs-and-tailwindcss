export default function Button({
  children,
  className = '',
  onClick = () => {},
  block = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`border-4 border-blue-400 rounded py-3 px-8 text-xl font-bold bg-purple-400 hover:bg-white hover:text-purple-500 ${className} ${
        block ? 'w-full' : ''
      }`}
    >
      {children}
    </button>
  );
}
