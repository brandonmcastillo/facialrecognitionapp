import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className="f3">
                {'This application will detect a face. Enter an image.'}
            </p>
            <div className="center">
                <div className="form center pa3 br3 shadow-5">
                    <input onChange={onInputChange} className="f4 pa2 w-70 center" type="text" />
                    <button onClick={onSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>                   
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;