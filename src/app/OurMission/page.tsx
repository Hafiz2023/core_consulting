'use client';

import React, { useState } from 'react';

const OurMission: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const videoContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  const youtubeVideoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    zIndex: 2,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
  };

  const dividerStyle: React.CSSProperties = {
    width: '50px',
    border: 'none',
    borderTop: '3px solid #ffcc00',
    margin: '10px auto',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    color: '#f5f5f5',
  };

  // Background muted video (loop)
  const bgVideoUrl =
    'https://www.youtube.com/embed/tYhz1LkRqAE?autoplay=1&mute=1&loop=1&playlist=tYhz1LkRqAE&controls=0&showinfo=0&modestbranding=1';

  // Fullscreen video with sound
  const fullVideoUrl =
    'https://www.youtube.com/embed/tYhz1LkRqAE?autoplay=1&mute=0&controls=1&rel=0';

  return (
    <main>
      <section
        style={sectionStyle}
        onClick={() => setIsPlaying(true)} // Click to open fullscreen
      >
        {/* Background video */}
        <div style={videoContainerStyle}>
          <iframe
            style={youtubeVideoStyle}
            src={bgVideoUrl}
            title="Background Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        {/* Overlay Content */}
        <div style={overlayStyle}>
          <div style={contentStyle}>
            <h2 style={headingStyle}>OUR MISSION</h2>
            <hr style={dividerStyle} />
            <p style={paragraphStyle}>
              To transform lives and provide innovative solutions through expert educational advice and consultancy for students and families.
            </p>
          </div>
        </div>

        {/* Fullscreen Video Popup */}
        {isPlaying && (
          <div
            onClick={() => setIsPlaying(false)} // click outside to close
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
            }}
          >
            {/* Stop event bubbling here */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '90%',
                height: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={fullVideoUrl}
                title="YouTube Video Player"
                allow="autoplay; encrypted-media"
                style={{ border: 'none', borderRadius: '12px' }}
              ></iframe>

              {/* ✅ Close Button (Now works correctly) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling
                  setIsPlaying(false);
                }}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-10px',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.transform = 'scale(1.2)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.transform = 'scale(1)')
                }
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default OurMission;
