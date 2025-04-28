import ProjectTemplate from './ProjectTemplate';

function EoXCheck() {
  return (
    <ProjectTemplate
      title="EoX Check"
      content="Co-operative Internship Project"
      images={["/assets/ciscodevnet.png","/assets/eox/eox.png", "/assets/eox/eox_checked.png", "/assets/eox/eox_export.png"]}
      background_project='The mentor at the internship encountered a problem when checking EoX because they had to search for the Part Numbers on Google manually, and since there were many to look up, it took a lot of time.'
      scope_project='the internship mentor and other employees in the company'
      text="A web application for checking the EoX (End-of-Life/End-of-Support) status of Cisco products. Users can quickly look up multiple Serial Numbers (S/N) or Part Numbers at once. The app integrates with Cisco APIs to fetch real-time EoX information efficiently."
      image_techstack="/assets/eox/eox_techstack.png"
    />
  );
}

export default EoXCheck;