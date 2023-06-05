import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product,handleRemoveItems}) => {
    const {id,name,price,quantity,img,shipping}=product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=""></img>
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p className='price-info'><small>price:{price}</small></p>
                    <p><small>shipping:{shipping}</small></p>
                    <p><small>quantity:{quantity}</small></p>
                </div>
                <div className='delete-container'>
                      <button onClick={()=>handleRemoveItems(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                      </button>
                </div>

            </div>
           
        </div>
    );
};

export default ReviewItem;