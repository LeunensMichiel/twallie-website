import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../button'

export default class App extends React.Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <Button onClick={this.onOpenModal} text="Boek mij" external />
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            overlay: 'overlay',
            modal: 'modal',
          }}
        >
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    )
  }
}
