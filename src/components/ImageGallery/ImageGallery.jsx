import ImageCard from "../ImageCard/ImageCard"



const ImageGallery = ({articles, openModal}) => {
  return (
      <div>
          <ul>
              {articles.map(item => (
                  <li key={item.id}>
                      <ImageCard openModal={openModal} item={item} />
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default ImageGallery