import React from 'react'
import { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
    const{song} = useContext(Songs)
    return(
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold'>Now playing</h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className='w-[100px] w-full' src={song.link.images[0].url} alt="avatar" />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className="w-[100px] h-[100px] rounded-full" src={song.link.images[1].url} alt="avatar" />
                <span className='text-xl text-white'>{song.author}</span>
            </div>

        </div>
    )
}