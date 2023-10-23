function TextBody({content, customStyle}) {
    return (
        <h3 className={`block  text-color-neutral-400 dark:text-color-neutral-200 text-xs font-medium mb-1${customStyle}`}>{content}</h3>
        )
  }
  export default TextBody