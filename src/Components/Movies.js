import React from 'react'

export default function Movies(props) {
    return (
        <div key={props.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`} alt={props.item} className='hover:scale-110'/>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{props.item?.title}</p>
                {/* <p onClick={changeLike}>{like ? <FontAwesomeIcon icon={faEnvelope} className='absolute top-4 left-4 text-gray-300' /> : <FontAwesomeIcon icon="fa-solid fa-heart" />} </p> */}
            </div>
        </div>
    )
}
