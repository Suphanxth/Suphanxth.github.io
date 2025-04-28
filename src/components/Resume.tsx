import './Resume.css';

function Resume() {
    return (
        <div className='resume'>
            <div className='resume__container'>
                <iframe 
                    src="https://drive.google.com/file/d/1eQydTDiNdnmVhwKKqNtEc24HTbJ0bE7t/preview" 
                    width="90%" 
                    height="760" 
                    allow="autoplay"
                    title="resume-preview"
                ></iframe>
            </div>
        </div>
    );
}

export default Resume;
