import * as BiIcons from 'react-icons/bi';

function ButtonSmall({onClick, icon}) {
  const Icon = BiIcons[onClick, icon];
  return (
 <button onClick={onClick} className='
  fill-color-title
  w-8
  h-8
  flex
  justify-center
  items-center
  text-lg
text-color-neutral 
  hover:bg-color-stroke-transparent
  cursor-pointer 
  rounded-md
'>
{<Icon/>}
 </button>
  )
}
export default ButtonSmall