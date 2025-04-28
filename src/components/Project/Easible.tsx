import ProjectTemplate from './ProjectTemplate';

function Easible() {
  return (
    <ProjectTemplate
      title="Easible: Automated Network Device Configuration and Verification Web Application"
      content="Thesis Project"
      images={["/assets/easible.png", "/assets/easible/easible_dashboard.png", "/assets/easible/easible_devices.png", "/assets/easible/easible_config.png","/assets/easible/easible_verify.png", "/assets/easible/easible_result.png", " /assets/easible/easible_labchecked.png"]}
      background_project='This approach eliminates the reliance on the Command Line Interface (CLI), allows simultaneous execution of commands on multiple devices, and minimizes human errors from repetitive operations.'
      scope_project='Users with basic network knowledge but limited experience in configuring and verifying devices.'
      text="A web application for automate network device configuration and verification."
      image_techstack="/assets/easible/easible_techstack.PNG"
    />
  );
}

export default Easible;