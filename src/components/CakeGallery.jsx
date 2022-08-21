import React from 'react'
import ImageGallery from 'react-image-gallery';
import image1 from './images/offer-image1.jpg'
import image2 from './images/offer-image2.jpg'
import CakeIcon from '@mui/icons-material/Cake';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function CakeGallery() {

    const images = [
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image1,
            thumbnail: image1,
        },
    ];

    return (
        <section className='gallery' id='cake-gallery'>
            <span className='title'>
                <h1>
                    <CollectionsIcon fontSize='50px' sx={{marginRight: '20px'}} />
                    Galeria Tortów
                    <CakeIcon fontSize='50px' sx={{marginLeft: '20px'}} />
                </h1>
            </span>
            <ImageGallery 
            items={images}
            infinite={true} 
            showNav={true}
            showFullscreenButton={false}
            autoPlay={true}
            showThumbnails={true}
            thumbnailPosition={'left'}
            showBullets={true}
            showIndex={true}
            />
        </section>
    )
}
