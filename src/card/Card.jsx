import React, { useEffect, useState } from 'react';
import './card.css';

const Card = ({ id, date, title, content, imageB, imageS, name, avatar, role }) => {

    const [popup, setPopup] = useState([]);
    const [popuptoggle, setPopuptoggle] = useState(false);

    const changeContent = (id) => {
        setPopup([id]);
        setPopuptoggle(!popuptoggle);

    }

    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageB} alt='profile' onClick={() => changeContent(id)} />
            </div>
            <div className="card-title">
                <p>{title}</p>
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>
            <div className="detail">
                <p>{name} - {role}</p>
                <p>{date}</p>
            </div>
            {popuptoggle && <div className="pop-up-container" onClick={changeContent}>
                <div className="pop-up-body">
                    <div className="pop-up-header">
                        <button onClick={changeContent}>X</button>
                    </div>
                    <div className="pop-up-content">
                        <div className="pop-up-card">
                            <img className='popup-img' src={imageS} alt="" />
                            <p className='popup-title'>{title}</p>
                            <p className='popup-content'>{content}</p>
                            <img className='popup-avatar' src={avatar} alt="" />
                            <p className='popup-role'>{name} - {role}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Card