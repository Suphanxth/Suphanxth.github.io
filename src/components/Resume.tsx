import './Resume.css';

function Resume() {
    return (
        <div className='resume'>
            <div className='resume__container'>
                <iframe 
                    src="https://drive.google.com/file/d/1U4bC-jb7roDT9iOXDXz221jhFZYERXI8/preview" 
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
