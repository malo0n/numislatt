// import { routes } from "@/shared/lib";
import { buttonProps } from "../model";

export function Button(props: buttonProps) {
  const { text, type, icon, onClick, className } = props;
  return type === "primary" ? (
    <button
      onClick={onClick}
      className={`${className} flex w-full min-w-fit items-center justify-center gap-3 rounded-lg hover:bg-secondaryYellow transition-all bg-mainYellow px-3 lg:px-6 py-4 text-16 leading-[125%] h-fit text-mainBlack`}
    >
      {icon && <img className='w-8' src={icon} alt='icon'></img>}
      <p>{text}</p>
    </button>
  ) : (
    <button
      onClick={onClick}
      className='flex w-full items-center justify-center gap-3 max-h-[52px] rounded-lg border-2 border-solid border-secondaryBlack px-3 lg:px-6 py-4 text-16 leading-[125%]'
    >
      {icon && <img className='w-8' src={icon} alt='icon'></img>}
      <p>{text}</p>
    </button>
  );
}
