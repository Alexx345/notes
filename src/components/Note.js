import { BsFillXSquareFill } from 'react-icons/bs'
const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <BsFillXSquareFill className="delete-icon" size="1.3em" />
      </div>
    </div>
  )
}

export default Note