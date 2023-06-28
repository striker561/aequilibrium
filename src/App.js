import React from 'react';
import Header from './component/header/header';
import YingYang from './component/ying-yang/ying-yang';
import About from './component/about/about';
import Technologies from './component/technologies/technologies';
import { ProjectIntro, Projects } from './component/projects/project';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

function App() {
  return (
    <main>
      <Header />
      <YingYang />
      <About />
      <Technologies />
      <ProjectIntro />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;
