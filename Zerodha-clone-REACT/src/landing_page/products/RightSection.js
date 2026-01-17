import React from 'react';

function RightSection({imageURL, productName, productDescription, linkOne}) {
    return ( 
        <div className='container'>
            <div className='row'>  
                <div className='col-4 p-5 mt-5'>
                    <h1 className='fs-4 pb-3 mt-5 pt-5'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a href={linkOne} style={{textDecoration:"none"}}>{linkOne}</a>
                    </div>
                </div>
                <div className='col-4 p-5'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;