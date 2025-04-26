import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [cards] = useState([
    {
      title: 'Easible: Automated Network Device Configuration and Verification Web Application',
      content: 'Thesis Project',
      image: '/src/assets/easible.png',
      text: "Thesis Project: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: '/myproject',
    },
    {
      title: 'EoX Check',
      content: 'EoX Check',
      image: '/src/assets/ciscodevnet.png',
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: '/myproject',
    }
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef<number>(0);
  const rafId = useRef<number | null>(null);

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
          <h1>PROJECT</h1>
          <div className="home__cards">
            {
              cards.map((card, i) => (
                <div className="home__card__item" key={i}>
                  <img src={card.image} alt={card.title} className="home__card__item__image" />
                  <h2 className="home__card__item__title">{card.title}</h2>
                  <p className="home__card__item__text">{card.text}</p>
                  <Link to={card.link} className="home__card__item__link">
                    <button className="home__card__item__link__btn">Explore {card.content}</button>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
