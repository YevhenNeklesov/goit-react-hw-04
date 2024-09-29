import ImageCard from "./ImageCard/ImageCard"



const ImageGallery = ({articles, openModal}) => {
  return (
      <div>
          <ul>
              {articles.map(item => (
                  <li onClick={openModal} key={item.id}>
                      <ImageCard src={item.urls.small} alt={item.alt_description} />
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default ImageGallery