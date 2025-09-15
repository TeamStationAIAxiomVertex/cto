
'use client';

import React from 'react';

const PodcastEmbed = () => {
  return (
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/episode/7EwovXvoVFIGLJDwqTZFUE?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default PodcastEmbed;
