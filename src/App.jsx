import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='realtive z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center' style={{ background: "linear-gradient(rgb(0, 204, 167) 0%, rgb(37 0 255) 50%, rgb(192, 97, 255) 100%)" }}>
          <Navbar />
          <Hero />

        </div>
        <About />
        <Experience />
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
