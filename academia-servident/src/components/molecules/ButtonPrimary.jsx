function ButtonPrimary({onClick, content, customStyle}) {
    return (
      <button 
      onClick={onClick }
      className={`rounded-lg w-full h-[45px] p-2 
     
      text-base 
      
    text-color-neutral 
       font-medium 
       shadow-sm  
       ${customStyle}`}>{content}</button>
    )
  }
  export default ButtonPrimary