import type SvgProps from "@/types/svg-props";

export default function Minus(props: SvgProps) {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 3}
      className={props.className}
      viewBox="0 0 20 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 1.125C19.5 1.78125 18.9844 2.25 18.375 2.25H1.125C0.46875 2.25 0 1.78125 0 1.125C0 0.515625 0.46875 0 1.125 0H18.375C18.9844 0 19.5 0.515625 19.5 1.125Z"
        fill="black"
      />
    </svg>
  );
}
