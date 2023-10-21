"use client"
import { useState } from 'react';
import { IoCard, IoLogoBitcoin, IoLogoPaypal } from 'react-icons/io5';
import Body1 from './Body1';


function Sidebar() {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    {
      option:'profesores',
      icon: (
        <IoCard className="text-color-primary w-full h-full flex" />
      )
    },
    {
      option: 'materias',
      icon: (
        <IoLogoBitcoin className="text-color-primary w-full h-full flex" />
      )
    },
    {
      option: 'aulas',
      icon: (
        <IoLogoPaypal className="text-color-primary w-full h-full flex" />
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
          className={`${
            selectedOption === item.option ?  'text-color-neutral appearance-none border-l-4 pl-3 rounded-md border-l-color-primary ' : ''
          }`}
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
            <span className="appearance-none text-lg text-color-neutral-700 font-normal capitalize w-[30px] h-[30px]">
              {item.option}
            </span>
          </label>
        </div>
      ))}
        </div>

      <div className='col-start-3 col-end-13 row-span-full w-full h-full'>
      <Body1 selectedOption={selectedOption}/>
      <div/>

    
    </div>
    </div>
  );
}

export default Sidebar;

