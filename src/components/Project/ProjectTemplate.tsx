import './ProjectTemplate.css';

interface ProjectTemplateProps {
  title: string;
  content: string;
  image: string;
  image_content?: string;
  background?: string;
  text: string;
  image_techstack?: string;
}

function ProjectTemplate({ title, content, image, text }: ProjectTemplateProps) {
  return (
    <div className="project__template">
      <img src={image} alt={title} className="project__template__image" />
      <h1 className="project__template__title">{title}</h1>
      <p className="project__template__content">{content}</p>
      <p className="project__template__text">{text}</p>
    </div>
  );
}

export default ProjectTemplate;