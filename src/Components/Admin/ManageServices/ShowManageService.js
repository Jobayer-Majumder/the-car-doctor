import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';



const ShowManageService = ({service}) => {

    const { title, price, _id} = service;

    const handleDelete = () => {
        fetch(`https://radiant-woodland-42613.herokuapp.com/deleteService/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Service Deleted successfully')
            }
        })
    }
    return (
        <>
            <tr>
                <td>{title}</td>
                <td>${price}</td>
                <td onClick={handleDelete}><RiDeleteBinLine className='text-brand'/></td>
            </tr>
        </>
    );
};

export default ShowManageService;