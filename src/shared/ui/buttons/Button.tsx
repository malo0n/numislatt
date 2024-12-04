// import { routes } from "@/shared/lib";
import { buttonProps } from "../../model";

export function Button(props: buttonProps) {
  const { text, type, icon, onClick, className } = props;
  return type === "primary" ? (
    <button
      onClick={onClick}
      className={`${className} flex h-fit w-full min-w-fit items-center justify-center gap-3 rounded-lg bg-mainYellow px-3 py-4 text-16 leading-[125%] text-mainBlack transition-all hover:bg-secondaryYellow lg:px-6`}
    >
      {icon && <img className='w-8' src={icon} alt='icon'></img>}
      {text && <p>{text}</p>}
    </button>
  ) : (
    <button
      onClick={onClick}
      className='flex max-h-[52px] w-full items-center justify-center gap-3 rounded-lg border-2 border-solid border-secondaryBlack px-3 py-4 text-16 leading-[125%] lg:px-6'
    >
      {icon && <img className='w-8' src={icon} alt='icon'></img>}
      {text && <p>{text}</p>}
    </button>
  );
}
