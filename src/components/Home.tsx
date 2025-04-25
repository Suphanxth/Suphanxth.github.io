import { useEffect, useRef, useState } from 'react';
import './Home.css';

function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollY = useRef<number>(0);
  const targetTime = useRef<number>(0);
  const rafId = useRef<number>();

  const [videoSrc, setVideoSrc] = useState<string>('');

  useEffect(() => {
    // เลือก video ตามความกว้างหน้าจอ
    const isMobile = window.innerWidth <= 768;
    setVideoSrc(isMobile ? '/src/assets/suphanath-mobile.mp4' : '/src/assets/suphanath.mp4');
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const onLoadedMetadata = () => {
      video.pause();

      const onScroll = () => {
        const distance = window.scrollY - section.offsetTop;
        const total = section.clientHeight - window.innerHeight;

        let percent = distance / total;
        percent = Math.max(0, Math.min(1, percent));

        targetTime.current = video.duration * percent;
      };

      const animate = () => {
        if (video.readyState >= 2) {
          video.currentTime += (targetTime.current - video.currentTime) * 0.08;
        }
        rafId.current = requestAnimationFrame(animate);
      };

      onScroll();
      animate();
      window.addEventListener('scroll', onScroll);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      window.removeEventListener('scroll', () => {});
      cancelAnimationFrame(rafId.current!);
    };
  }, [videoSrc]); // ต้องรอ videoSrc ถูกกำหนดก่อน

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__video" ref={sectionRef}>
          <div className="holder">
            {videoSrc && (
              <video
                ref={videoRef}
                muted
                playsInline
                className="home__video__content"
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
        <div className="home__text">
          <h1>LESGOOOOOOOOOOOOOOOO</h1>
          <p>ยังคิดเนื้อหาที่จะเขียนม่ายยยยยยยยยยยยออก แต่น่าจะใส่ Project เป็น card</p>
          <a href="https://www.youtube.com/watch?v=ciqW_uNtxjM" className="home__text__link">
            <button className="home__text__link__btn">Go to Example</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
