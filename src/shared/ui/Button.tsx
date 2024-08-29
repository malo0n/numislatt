// import { routes } from "@/shared/lib";
import { buttonProps } from "../model";

export function Button(props: buttonProps) {
  const { text, type, icon, onClick, className } = props;
  return type === "primary" ? (
    <button
      onClick={onClick}
      className={`${className} z-10 flex w-full items-center justify-center gap-3 rounded-lg bg-[#fbe366] px-6 py-[10px] text-2xl`}
    >
      {icon && <img className='w-8' src={icon} alt='icon'></img>}
      <p>{text}</p>
    </button>
  ) : (
    <button
      onClick={onClick}
      className='z-10 flex w-full items-center justify-center gap-3 rounded-lg border-2 border-solid border-secondaryBlack py-[10px] text-2xl'
    >
      {icon && <img className='w-8' src={icon} alt='icon'></img>}
      <p>{text}</p>
    </button>
  );
}
