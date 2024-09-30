import s from "./ImageCard.module.css"

const ImageCard = ({item, openModal}) => {
  return (
      <div>
          <img className={s.img} onClick={() => openModal(item)} src={item.urls.small} alt={item.alt_description} />
    </div>
  )
}

export default ImageCard