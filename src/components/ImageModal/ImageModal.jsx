import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, closeModal, article}) => {

  Modal.setAppElement('#root')
    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img src={article.urls.regular} alt={article.alt_description} />
        </div>
      </Modal>
    </div>
  )
}

export default ImageModal