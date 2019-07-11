import React from 'react'
import AwesomeDebouncePromise from 'awesome-debounce-promise';

// ES6 Imports
import { Link, Element } from 'react-scroll';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Education from '../components/education'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'
import logo from '../images/logo.svg'

import * as style from  '../styles/style.module.scss'

class IndexPage extends React.Component {
  state = {
    darkMode: false,
    nextPage: 'layer-2',
    nextText: 'Next Page',
  }

  componentDidMount() {
    window.addEventListener('scroll', AwesomeDebouncePromise(() =>{
      let scroll = {
         x: window.pageXOffset,
         y: window.pageYOffset,
      };
      const height = window.innerHeight;
      const y = Math.floor(scroll.y/height);
      this.setState({ nextPage: y === 4 ? 'layer-1' : `layer-${y+2}`});
      this.setState({ nextText: y === 4 ? 'Back to Top' : 'Next Page' })
    }, 100));
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: true });
  }

  toggleLightMode = () => {
    this.setState({ darkMode: false });
  }

  render() {
    const { darkMode, nextPage, nextText } = this.state;

    return (
      <Layout>
        <SEO title="My Portfolio" keywords={[`Fransiskus Felix Mangundap`, `Felix Mangundap`, `Felix`, 'Waterloo']} />
        <a href='/'><img src={logo} className={style.logo} alt='logo' /></a>
        <div className={style.modeToggle}>
          <a onClick={this.toggleLightMode} className={`${style.mode} ${darkMode ? null : style.modeSelected}`}>light side</a>
          <p className={style.modeDivider}>/</p>
          <a onClick={this.toggleDarkMode}className={`${style.mode} ${darkMode ? style.modeSelected : null}`}>dark side</a>
        </div>
        <Link to={nextPage} spy={true} smooth={true} duration={500} className={style.nextPage}>{nextText}</Link>
        <Element name='layer-1' className="element">
          <Landing darkMode={darkMode} />
        </Element>
        <Element name='layer-2' className="element">
          <Education darkMode={darkMode} />
        </Element>
        <Element name='layer-3' className="element">
          <Experience darkMode={darkMode} />
        </Element>
        <Element name='layer-4' className="element">
          <Projects darkMode={darkMode} />
        </Element>
        <Element name='layer-5' className="element">
          <Contact darkMode={darkMode} />
        </Element>
      </Layout>
    )
  }
}

export default IndexPage
