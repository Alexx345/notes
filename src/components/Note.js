import { BsFillXSquareFill } from 'react-icons/bs'
const Note = () => {
  return (
    <div className="note">
      <span>This is the first note</span>
      <div className="note-footer">
        <small>07/07/2021</small>
        <BsFillXSquareFill className="delete-icon" size="1.3em" />
      </div>
    </div>
  )
}

export default Note