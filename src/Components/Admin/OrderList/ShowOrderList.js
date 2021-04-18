import React from 'react';

const ShowOrderList = ({order}) => {
    const { email, displayName, serviceName, funding, status} = order;
    return (
        <>
            <tr>
                <td>{displayName}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{funding}</td>
                <td>{status}</td>
            </tr>
        </>
    );
};

export default ShowOrderList;