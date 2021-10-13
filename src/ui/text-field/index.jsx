export default function TextField({
  type = 'text',
  placeholder,
  value,
  onChange = () => {},
  className,
}) {
  return (
    <input
      className={`border-2 rounded py-2 px-4 w-full text-gray-700 focus:bg-blue-500 ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
