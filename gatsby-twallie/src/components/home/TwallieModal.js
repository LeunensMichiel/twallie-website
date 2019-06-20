import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'react-responsive-modal'
import Button from '../button'

class TwallieModal extends React.Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
    document.querySelector('.blurwrapper').classList.add('open')
  }

  onCloseModal = () => {
    this.setState({ open: false })
    document.querySelector('.blurwrapper').classList.remove('open')
  }

  render() {
    const { open } = this.state
    const { buttonText, content } = this.props
    return (
      <>
        <Button onClick={this.onOpenModal} text={buttonText} external />
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            overlay: 'overlay',
            modal: 'modal',
            closeIcon: 'modalCloseBtn',
          }}
        >
          {content}
        </Modal>
      </>
    )
  }
}

TwallieModal.propTypes = {
  buttonText: PropTypes.string,
  content: PropTypes.element,
}

export default TwallieModal
