import './App.css';
import Info from './components/basic-info';
import {useState} from 'react';
import exampleData from './components/placeholders';
import AboutYouDisplay from './components/display-basic';
import Eduinfo from './components/edu-info';
import EduDisplay from './components/display-edu';

function App() {
  const [aboutYou, setAboutYou] = useState(exampleData.personalInfo);
  const [visibleSidebar, setVisibleSidebar] = useState(true);

  const handleShowHide = () => {
    const inputsSection = document.querySelector('.inputs');
    if (visibleSidebar === true) {
      inputsSection.style.cssText = 'display: none;';
      setVisibleSidebar(false);
    } else {
      inputsSection.style.cssText = 'display: block;';
      setVisibleSidebar(true);
    }
  }

  const handleReset = () => {
    setAboutYou(exampleData.personalInfo);
  }
  const handlePrint = () => {
    window.print();
  }
  return (
    <div className="App">
      <div className="inputs">
        <Info
          data={aboutYou}
          onChange={setAboutYou}
        />
        <Eduinfo
          data={aboutYou}
          onChange={setAboutYou}
        />
        <br></br>
        <div className="editing-buttons">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleShowHide}>Submit</button>
          </div>
      </div>
      <div className='outputs'>
        <div className='output-display'>

          <AboutYouDisplay
            data={aboutYou}
            />
          <EduDisplay
            data={aboutYou}
            />
        </div>
          {!visibleSidebar && (
              <div className="display-buttons">
                <button className="edit" onClick={handleShowHide}>Edit</button>
                <button className="print-cv" onClick={handlePrint}>Print</button>
              </div>
            )}
      </div>
    </div>
  );
}

export default App;
