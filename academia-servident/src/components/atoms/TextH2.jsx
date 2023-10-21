function TextH2({content, customStyle}) {
    return (
        <h2 className={`truncate text-base text-center   text-color-neutral-100 ${customStyle}`}>{content}</h2>
        )
  }
  export default TextH2