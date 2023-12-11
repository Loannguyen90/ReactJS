import React, {useContext, useEffect, useState} from 'react'
import {Songs} from '../Context'

export default function ListSongs() {
    const {DataSongs, handleSetSong, song} = useContext(Songs);
    const[idSong, setidSong] =useState(0);
    const handlePlaysong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    };
    useEffect (() => {
        setidSong(song.id)
    }, [song])
    return(
        <div className= "col-span-2 overflow-y-scroll">
            <table className='table-auto w-full'>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[40%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody>
                {
                    DataSongs.map((song, index) =>
                    <tr key={index} 
                        className={`bg-slate-800 h-12 text-neutral-400 hover:bg-blue-200 ${idSong === song.id && 'bg-blue-200 text-teal-400'}`}
                        onClick={() =>handlePlaysong(idSong)}>
                        <td className='text-center'>{index + 1}</td>
                        <td>{song.name}</td>
                        <td className='text-center'>{song.author}</td>
                        <td className='text-center'><a href={song.url}>
                            <i className="fa fa-download"></i>
                            </a></td>
                    </tr>
                     )
                }
                    
                </tbody>

            </table>
        </div>
    )
}