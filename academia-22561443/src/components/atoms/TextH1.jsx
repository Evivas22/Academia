function TextH1({content, customStyle}) {
    return (
      <h1 className={`capitalize text-xl text-center font-bold text-color-neutral-700 ${customStyle}`}>{content}</h1>
    )
  }
  export default TextH1