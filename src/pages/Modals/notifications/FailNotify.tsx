import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    maxWidth: '400px',
    border: 0,
    borderRadius: '20px',
    position: 'relative',
    overflow: 'visible',
    padding: '0',
    width: '98%',
  },
}

const { forwardRef, useRef, useImperativeHandle } = React

const FailNotify = forwardRef((props, ref) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")  
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setIsOpen(true)
    },
    closeModal: () => {
      setIsOpen(false)
    },
    setModalTitle: (txTitle: string) => {
      setTitle(txTitle)
    },
    setModalDescription: (txDescription: string) => {
      setDescription(txDescription)
    }
  }))

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Modal
      // parentSelector={() => document.querySelector('.kokirinner ')}
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="notificationmodal"
    >

    
      
      <div className="claimmodelouter notificationmodalouter">
        <img src="images/hiroshi/lp3.svg" alt="lp" className="lpimage2"/>
        <div className="content">
          <h2>{title}</h2>
          {description}
        </div>
      </div>
    </Modal>
  )
})

export default FailNotify
