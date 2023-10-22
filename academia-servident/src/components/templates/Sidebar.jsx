"use client"
import { useState } from 'react';
import { IoLogoBitcoin, IoLogoPaypal,} from 'react-icons/io5';
import Body1 from './Body1';
import ModalCreate from '../organism/ModalCreate';
import { BiBookBookmark, BiBookmark, BiUserCircle } from 'react-icons/bi';
import TextH1 from '../atoms/TextH1';
import TextH2 from '../atoms/TextH2';
import TextH3 from '../atoms/TextH3';
import ButtomDarkmode from '../atoms/ButtomDarkmode';


function Sidebar() {
  const [selectedOption, setSelectedOption] = useState('profesores');

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

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

      <div className=' col-start-1 flex flex-col items-center  col-end-3  pt-7 row-start-1 row-span-2 h-full w-full'>
        
        <BiUserCircle className=' w-[50px] h-[50px] text-color-primary'/>
        <TextH2 content={"Enmanuel Vivas"} customStyle={" font-medium text-color-primary "}/>
        <TextH3 content={"enmanuelvivas.22@gmail.com"} customStyle={" font-medium text-color-neutral-700 "}/>
      </div>
      <div className=' pl-3 col-start-1 col-end-3 py-4 row-start-3 w-full'>
      {options.map((item, index) => (
        <div
          key={index}

        >
          <label
            className="flex gap-4 mb-7 cursor-pointer items-center"
            onClick={() => {
              handleOptionSelect(item.option);
            }}
          >
            <span className="appearance-none w-[30px] h-[30px]">
              {item.icon}
            </span>
            <span 
              className={`${
                selectedOption === item.option ?  'text-color-primary text-base capitalize border-l-4 pl-3 rounded-md border-l-color-primary ' : 'appearance-none  text-sm text-color-neutral-700 capitalize w-[30px] h-[30px]'
              }`}>
        
            {item.option}
            </span>
          </label>
        </div>
      ))}
        </div>

    <div className='col-start-3  col-end-13 row-span-full'>
   
      <Body1 selectedOption={selectedOption}/>
  
      <div/>

 
   
    
    </div>
     
    <div className="  col-start-1 col-span-2  row-start-6 w-full row-span-6 relative  h-7">
          <input
            type="checkbox"
            className="hidden"
            checked={showForm}
            onChange={toggleForm}
          />
          <div className="toggle__line w-10 h-6 bg-color-backgroud rounded-full border border-color-trasparente  shadow-inner">
          </div>
          <div className={`toggle__dot absolute w-6 h-6 bg-color-primary rounded-full shadow top-0 left-0 ${showForm ? '  translate-x-6 bg-blue-500' : 'bg-gray-300'}`}
          
          >

          </div>
    </div>
    </div>
  );
}

export default Sidebar;

