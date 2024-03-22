import React from 'react';

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-6/12 mx-auto aspect-video"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;