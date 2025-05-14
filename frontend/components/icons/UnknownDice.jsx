function UnknownDice({ className = "" }) {
  return (
    <svg
      className={className} // <- вот тут!
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      stroke="currentColor"
    >
      <rect
        x="48"
        y="48"
        width="416"
        height="416"
        rx="56"
        ry="56"
        strokeWidth="20"
        fill="none"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="200"
        fontFamily="Arial, sans-serif"
        fill="currentColor"
      >
        ?
      </text>
    </svg>
  );
}

export default UnknownDice;
