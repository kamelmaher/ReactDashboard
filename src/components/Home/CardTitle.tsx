import MoreVertIcon from '@mui/icons-material/MoreVert';
type CardTitleProps = {
    text: string
}
const CardTitle = ({text}:CardTitleProps) => {
    return (
        <div className='d-flex justify-content-between'>
            <h5 className="fw-medium">{text}</h5>
            <span><MoreVertIcon /></span>
        </div>
    )
}

export default CardTitle
