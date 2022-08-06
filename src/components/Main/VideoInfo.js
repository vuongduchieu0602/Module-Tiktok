import React from 'react'
import { FaMusic } from 'react-icons/fa';

 const VideoInfo = () => {
  return (
    <div className="flex flex-row">
        <img 
            className="w-[50px] h-[50px] rounded-full" 
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/296003762_471718688106658_8425902890239229767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z6HFNzBKq14AX82q2Wd&_nc_ht=scontent.fhan2-4.fna&oh=00_AT8enEOeITxXhfsURYmnKPY4LoSEx5cptf0EquW2Mye4LQ&oe=62F2CCB1" 
            alt="avatar" 
        />
        <div className="ml-3 min-w-[80%]">
            <div>
                <a href="https://tailwindcss.com/docs/flex-direction" className="text-xl font-bold hover:underline">Vương Đức Hiếu</a>
                <a href="https://tailwindcss.com/docs/flex-direction" className="ml-3">_vghz0602</a>
            </div>
            <div>
                description
            </div>
            <div className="flex flex-row items-center">
                <FaMusic /> <span className="ml-3">bài hát đang phát</span>
            </div>
        </div>
        <div>
            <button className="p-1 pr-3 pl-3 border-2 border-red-400 text-red-400 rounded-md">Follow</button>
        </div>
    </div>
  )
}

export default VideoInfo;