import React from 'react';
import VideoInfo from './VideoInfo';
import VideoContent from './VideoContent';

const Video = () => {
    return (
        <div className="snap-start max-w-[600px] mb-10 border-b-2 border-gray-400 pt-10 pb-10">
            <VideoInfo />
            <VideoContent />
        </div>
    );
}

export default Video;