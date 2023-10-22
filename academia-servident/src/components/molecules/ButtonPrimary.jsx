function ButtonPrimary({customStyle}) {
    return (
      <button className={`rounded-full w-full h-[45px] p-2 bg-color-backgroud text-sm text-color-neutral font-normal shadow-sm shadow-color-primary hover:-translate-y-1 ${customStyle}`}>Añadir Nuevo</button>
    )
  }
  export default ButtonPrimary