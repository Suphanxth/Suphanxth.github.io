import './ProjectTemplate.css';
import { useState } from 'react';

interface ProjectTemplateProps {
  title: string;
  content: string;
  images: string[]; // เปลี่ยนจาก image เป็น array ของ images
  background_project?: string;
  scope_project?: string;
  text: string;
  image_techstack?: string;
}

function ProjectTemplate({ title, content, images, text, background_project, image_techstack, scope_project}: ProjectTemplateProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="project__template">
      <div className="project__template__slider__wrapper">
        <button onClick={handlePrev} className="slider__button slider__button--prev">❮</button>
        
        <div className="project__template__slider">
          <img
            src={images[currentImageIndex]}
            alt={`${title} - Slide ${currentImageIndex + 1}`}
            className="project__template__image"
          />
        </div>
        
        <button onClick={handleNext} className="slider__button slider__button--next">❯</button>
      </div>
      <h1 className="project__template__title">{title}</h1>
      <p className="project__template__content">{content}</p>
      <p className="project__template__background_project"><strong>BACKGROUND:</strong> {background_project}</p>
      <p className="project__template__scope_project"><strong>SCOPE:</strong> {scope_project}</p>
      <p className="project__template__text">{text}</p>
      <img 
        src={image_techstack} 
        alt={`${title} - Tech Stack`} 
        className="project__template__techstack" 
      />
    </div>
  );
}

export default ProjectTemplate;