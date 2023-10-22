"use client"
import { useState } from 'react';
import { IoLogoBitcoin, IoLogoPaypal,} from 'react-icons/io5';
import Body1 from './Body1';
import ModalCreate from '../organism/ModalCreate';
import { BiBookBookmark, BiBookmark, BiUserCircle } from 'react-icons/bi';


function Sidebar() {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    {
      option:'profesores',
      icon: (
        <BiUserCircle className="text-color-primary w-full h-full flex" />
      )
    },
    {
      option: 'materias',
      icon: (
        <BiBookBookmark className="text-color-primary w-full h-full flex" />
      )
    },
    {
      option: 'aulas',
      icon: (
        <BiBookmark className="text-color-primary w-full h-full flex" />
      )
    },
  ];

    const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='    
    grid
    grid-cols-12
    grid-rows-6
    gab-[24px] 
    col-start-1 
    col-end-3 
     w-full 
     h-full'>

      <div className=' pl-3 col-start-1 col-end-3 row-start-2 items-center justify-center w-full'>
      {options.map((item, index) => (
        <div
          key={index}

        >
          <label
            className="flex gap-2 mb-4 cursor-pointer items-center"
            onClick={() => {
              handleOptionSelect(item.option);
            }}
          >
            <span className="appearance-none w-[30px] h-[30px]">
              {item.icon}
            </span>
            <span 
              className={`${
                selectedOption === item.option ?  'text-color-primary  capitalize border-l-4 pl-3 rounded-md border-l-color-primary ' : 'appearance-none text-base  text-color-neutral-700 capitalize w-[30px] h-[30px]'
              }`}>
        
            {item.option}
            </span>
          </label>
        </div>
      ))}
        </div>

      <div className='col-start-3 col-end-13 row-span-full'>
   
      <Body1 selectedOption={selectedOption}/>
  
      <div/>

    
    </div>
    </div>
  );
}

export default Sidebar;

