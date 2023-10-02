import React, { useState,useEffect } from 'react'
import './Gallery.css'


function Gallery() {
const handleDeleteImage=(id)=>{
    setImages(images.filter((i)=>i.id !== id))
    
}
const [images,setImages]=useState([])

useEffect(()=>{

const fetchImages=()=>{
        
    const data= [
    {
    id:1,
    url:'https://picsum.photos/id/1/300/200' ,
    title:'Image 1'

    },
    {
    id:2,
    url:' https://picsum.photos/id/2/300/200',
    title:'image2'
    },
    {
    id:3,
    url:' https://picsum.photos/id/3/300/200',
    title:'image3'
    },
    {
    id:4,
    url:' https://picsum.photos/id/4/300/200',
    title:'image4'
    },
    {
    id:5,
    url:' https://picsum.photos/id/5/300/200',
    title:'image5'
    },


    ]

    setImages(data)
    }
    fetchImages()
},[])


  return (
    <div>
        <h1 className='title'> Image Gallery App </h1>
      {
        images.length >0 ?

        <div className='image-grid'>
        {
        images.map((image)=>(

        <div className='image-card' key={image.id}>

            <img src={image.url} alt="" />

            <div className='image-details'>
                <h3> {image.title} </h3>
                <button onClick={()=>handleDeleteImage(image.id)} >Delete</button>

            </div>

        </div>
            ))

        }

      </div>
      : <p style={{display:'flex',  fontSize:'24px', justifyContent:'center'}} >No Images</p> }
    </div>
  )
}

export default Gallery
