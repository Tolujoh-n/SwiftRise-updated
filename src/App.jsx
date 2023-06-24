import { BrowserRouter } from 'react-router-dom';
import { Routes } from './config';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
