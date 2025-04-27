import ProjectTemplate from './ProjectTemplate';

function EoXCheck() {
  return (
    <ProjectTemplate
      title="EoX Check"
      content="EoX Check"
      image="/src/assets/ciscodevnet.png"
      text="A web application for checking the EoX (End-of-Life/End-of-Support) status of Cisco products. Users can quickly look up multiple Serial Numbers (S/N) or Part Numbers at once. The app integrates with Cisco APIs to fetch real-time EoX information efficiently."
    />
  );
}

export default EoXCheck;