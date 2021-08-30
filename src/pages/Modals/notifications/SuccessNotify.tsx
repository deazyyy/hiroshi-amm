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

const SuccessNotify = forwardRef((props, ref) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [txhash, setTxHash] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setIsOpen(true)
    },
    setTransactionHash: (tx: string) => {
      setTxHash(tx)
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
      onAfterOpen={() => afterOpenModal}
      onRequestClose={() => closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="notificationmodal"
    >
      <div className="claimmodelouter notificationmodalouter">
        <img src="images/hiroshi/lp1.svg" alt="lp" className="lpimage"/>
        <div className="content">
          <h2>{title}</h2>
          {description}
          <a href={`https://bscscan.com/tx/${txhash}`} target='_blank' rel="noopener noreferrer">Vien on BScSan</a>
        </div>
      </div>
    </Modal>
  )
})

export default SuccessNotify
