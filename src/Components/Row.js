import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Movies from './Movies';

export default function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    // const [like, setLike] = useState(false);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    // const changeLike = () => {
    //     if(like === false) {
    //         setLike(true);
    //     }
    //     else{
    //         setLike(false);
    //     }
    // }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => {
                        return <Movies key={id} id={id} item={item}/>
                    })}
                </div>
            </div>
        </>
    )
}
