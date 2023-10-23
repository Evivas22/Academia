import * as BiIcons from 'react-icons/bi';

function ButtonMini({onClick,icon}) {
  const Icono = BiIcons[icon];

  return (
 <button 
 onClick={onClick}
 className='
  fill-color-title
  w-8
  h-8
  flex
  justify-center
  items-center
  text-lg
text-color-neutral-700
  hover:bg-color-stroke-transparent
  cursor-pointer 
  rounded-md
'>
<Icono/>
 </button>
  )
}
export default ButtonMini