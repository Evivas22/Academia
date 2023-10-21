"use client"
import { useState } from 'react';
import { IoCard, IoLogoBitcoin, IoLogoPaypal } from 'react-icons/io5';

function Sidebar() {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    {
      option: 'Profesores',
      icon: (
        <IoCard className="text-color-primary w-full h-full flex" />
      ),
      routes: {
        all: '/api/profesores',
        byId: '/api/profesores/:id',
      },
    },
    {
      option: 'Materias',
      icon: (
        <IoLogoBitcoin className="text-color-primary w-full h-full flex" />
      ),
      routes: {
        all: '/api/materias',
        byId: '/api/materias/:id',
      },
    },
    {
      option: 'Aulas',
      icon: (
        <IoLogoPaypal className="text-color-primary w-full h-full flex" />
      ),
      routes: {
        all: '/api/aulas',
        byId: '/api/aulas/:id',
      },
    },
  ];

    const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <div>
      {options.map((item, index) => (
        <div
          key={index}
          className={`${
            selectedOption === item.option ? 'bg-color-secondary' : ''
          }`}
        >
          <label
            className="flex gap-2 mb-4 cursor-pointer w-full items-center"
            onClick={() => {
              handleOptionSelect(item.option);
            }}
          >
            <span className="appearance-none w-[30px] h-[30px]">
              {item.icon}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

