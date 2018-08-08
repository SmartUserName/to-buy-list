import React from 'react';

const Table = ({list, onDismiss}) => {
    return(
        <div>
            <div>
                <table align={"center"}>
                    <tbody >
                        <tr>
                            <th >Item</th>
                            <th >Category</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        {list.map((item, index) =>
                            <tr key={index}>
                                <td>{item.item}</td>
                                <td>{item.type}</td>
                                <td>{item.quantity}</td>
                                <td><button className={"button"} onClick={() => onDismiss(index)}>Delete</button></td>
                            </tr>
                    )}
                    </tbody>
                    </table>
            </div>
        </div>
    )
};


export { Table };