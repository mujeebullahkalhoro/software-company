import './Button.css';
export default function Button({title ,style}) {
  return (
    <button className={style}>{title}</button>
  )
}
