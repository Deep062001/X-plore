import React from 'react'
import './PinModal.scss'
const PinModal = (props) => {
  return (
    <div className='modal' onClick={props.showPinModalFunc}>
    <div className='modal-div'>
    <h3>Enter Account Pin</h3>
    <form>
    <div className='pin-input-div'>
       <input className='pin-input' type='character' maxlength='1' size='1'/>
       <input className='pin-input' type='character' maxlength='1' size='1'/>
       <input className='pin-input' type='character' maxlength='1' size='1'/>
       <input className='pin-input' type='character' maxlength='1' size='1'/>
    </div>
    <div>
       <button className='modal-submit-btn'>Enter</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default PinModal