"use client"
import { useEffect, useRef } from "react";
import { styled } from "styled-components";

export default function Home({n = 1, src = ""}) {

  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current && scrollableRef.current) {
      const videoDuration = videoRef.current.duration;
      scrollableRef.current.style.height = `${videoDuration * window.innerHeight * n}px`
    }


    const updateVideoTime = () => {
      if(videoRef.current && scrollableRef.current){
        const videoDuration = videoRef.current.duration;

        let scrollPosition = window.scrollY;

        const timeToPlay = scrollPosition / (window.innerHeight * n);

        if (timeToPlay <= videoDuration) {
          videoRef.current.currentTime = timeToPlay;
        }
      }
    }

    const handleScroll = () => {
      requestAnimationFrame(updateVideoTime);
    }

    // replace with intersection observer
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [videoRef, scrollableRef, n]);

  return (
    <StyleWrapper>
      <div>
        <video src={src} ref={videoRef} />
        <div className='scroll-space' ref={scrollableRef} />
      </div>
      <div className="dummy-space"/>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div`
  video {
    height: 100vh;
    width: 100vw;
    position: sticky;
    top: 0px;
  }

  .scroll-space {
    background-color: green;
  }

  .dummy-space {
    background-color: red;
    height: 400vh;
  }
`
