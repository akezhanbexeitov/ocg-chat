interface Props {
  fillColor?: string;
}

export default function Ellipsis({ fillColor }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
      <path
        fill={fillColor}
        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
      />
    </svg>
  );
}
