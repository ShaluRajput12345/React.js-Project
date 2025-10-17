import styles from './Button.module.css'

function Button({text, icon, isOutline}) {
  return (
    <div className={isOutline ? styles.outline_btn :styles.primarybtn}>
      {icon}
      {text}
      
    </div>
  )
}

export default Button
