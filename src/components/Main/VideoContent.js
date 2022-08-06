import React from 'react'
import { FaHeart } from 'react-icons/fa';
import {useRef, useState} from 'react';

export default function VideoContent() {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    };
  return (
    <div className="flex flex-row">
        <video 
            ref={videoRef}
            onClick={handleVideo}
            className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4" 
            src="https://v16-webapp.tiktok.com/502db7156968055c6be4b2166b8f933e/62eea0a4/video/tos/alisg/tos-alisg-pve-0037/eba27535f33d43e08c48f3cfb447a317/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1670&bt=835&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZFy5twe2NT.hml7Gb&mime_type=video_mp4&qs=0&rc=ZWk6ZzhpMzw3NzU6ODs4aUBpM3U6Zzo6ZnFoNzMzODgzNEAxNS5iNTIyNjExNWAuNDM0YSNfaS0wcjQwcGtgLS1kLy1zcw%3D%3D&l=202208061108210102450020022241CF21" 
            loop
        />
        <div className="flex flex-col justify-end ml-5">
            <div className="text-center mb-3">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaHeart className="text-md"/>
                </div>
                <span>123456</span>
            </div>
            <div className="text-center mb-3">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaHeart className="text-md"/>
                </div>
                <span>12345</span>
            </div>
            <div className="text-center mb-3">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaHeart className="text-md"/>
                </div>
                <span>1234</span>
            </div>
            
        </div>
    </div>
  )
}
