import { BrowserRouter } from 'react-router-dom';
import { Routes } from './config';
import { Footer, Nav } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
