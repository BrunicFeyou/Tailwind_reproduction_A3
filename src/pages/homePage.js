
import '../App.css';
import TailwindLogo from '../components/tailwindLogo';
import MainCatalogsPages from '../components/mainCatalogsPages';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="w-full flex flex-col  lg:flex-row">
      <TailwindLogo />
      <MainCatalogsPages/>
        
    </div>
  );
}

export default App;
