type ImgComponentProps = {
    src: string,
    width: number
}

const ImgComponent = ({src , width}:ImgComponentProps) => {
    return (
        <img src={src} alt="" width={width}/>
    )
}

export default ImgComponent
