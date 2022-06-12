import './Styles/App.css';
import './Styles/Btn.css';

import {AwesomeButton,} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

import logo from './Contents/Logo.png';
import Slider from "./Slider/Slider";
import {Footer} from '@govuk-react/footer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <AwesomeButton type="primary" size="large"
        >Nos prestations</AwesomeButton>

        <AwesomeButton type="primary" size="large"
        >Devis</AwesomeButton>

        <AwesomeButton type="primary" size="large"
        >Contact</AwesomeButton>

        <AwesomeButton type="primary" size="large"
        >Qui sommes nous ?</AwesomeButton>      
      </header>

      <div className='Slider/Bg'>
        <h1 className='Txt'>Nos differentes prestations : 
        </h1>
        <Slider/>
      </div>

      {/* <div className='Grande-div' alt="2nd partie">

        <h1 className="Grand-titre">Grand-titre </h1>

        <div className="Contenaire-Images">


        </div>

      </div> */}

      <div style={{height: 45,}}></div>

      <Footer meta={<>
      <metadata className="Support-links">
        <Footer.Link href="/">Instagram</Footer.Link>
        <Footer.Link href="/footer-meta-item-2">Linkedin</Footer.Link>
        <Footer.Link href="/">Facebook</Footer.Link>
      </metadata>
      
      <Footer.MetaCustom>Built by the{' '}
        <Footer.Link href="/">Gliber Enterprise</Footer.Link>
      </Footer.MetaCustom>
      </>}/>

    </div>
  );
}

export default App;




