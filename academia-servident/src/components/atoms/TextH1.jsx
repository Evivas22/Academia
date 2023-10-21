function TextH1({content, customStyle}) {
    return (
      <h1 className={`truncate text-xl text-center font-bold text-color-neutral ${customStyle}`}>{content}</h1>
    )
  }
  export default TextH1