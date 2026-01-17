import React from 'react';

function LeftSection({imageURL, productName, productDescription, linkOne, linkTwo, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col-2 p-5 m-5'></div>
                <div className='col-4 p-5 mt-5'>
                    <h1 className='fs-4 pb-3'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a href={linkOne} style={{textDecoration:"none"}}>{linkOne}</a>
                        <a href={linkTwo} style={{marginLeft:"50px", textDecoration:"none"}}>{linkTwo}</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft:"20px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;