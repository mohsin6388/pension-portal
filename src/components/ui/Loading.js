export default function Loader({
  size = 20,
  color = "white",
  text = "",
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="4"
          className="opacity-25"
        />

        <path
          fill={color}
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>

      {text && (
        <span
          style={{ color }}
          className="text-sm font-medium"
        >
          {text}
        </span>
      )}
    </div>
  );
}