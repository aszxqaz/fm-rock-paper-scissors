export default function IconClose({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
        opacity=".25"
      />
    </svg>
  );
}
