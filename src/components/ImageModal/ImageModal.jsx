import ReactModal from "react-modal";
import Modal from 'react-modal';
// import React from 'react';
// import ReactDOM from 'react-dom';

const ImageModal = ({ modalIsOpen,openModal, closeModal, }) => {
    
    Modal.setAppElement('#root')

  return (
      <div>
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam optio repellendus amet veniam recusandae error? Ex quibusdam autem quaerat! Mollitia, recusandae vitae! Ut perferendis quisquam ratione quam iste quaerat debitis maxime esse, earum ipsa facere? Numquam neque necessitatibus molestiae modi, enim debitis distinctio autem reiciendis veritatis dolorem libero dicta non aut illum totam reprehenderit eos sequi. Vero id quos aspernatur rem alias consequuntur odit a, possimus consectetur mollitia eaque pariatur labore nam iure iusto, dolorum nisi deleniti vitae. Dolore consequuntur temporibus modi. Libero neque aspernatur est vel ad quidem laboriosam? Fugiat porro velit nam atque nesciunt! Suscipit, illum vel.</p>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default ImageModal