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
    nextPage: 'layer-2',
    nextText: 'Next Page'
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

  render() {
    const { nextPage, nextText } = this.state;

    return (
      <Layout>
        <SEO title="My Portfolio" keywords={[`Fransiskus Felix Mangundap`, `Felix Mangundap`, `Felix`, 'Waterloo']} />
        <a href='/'><img src={logo} className={style.logo} alt='logo' /></a>
        <Link to={nextPage} spy={true} smooth={true} duration={500} className={style.nextPage}>{nextText}</Link>
        <Element name='layer-1' className="element">
          <Landing />
        </Element>
        <Element name='layer-2' className="element">
          <Education />
        </Element>
        <Element name='layer-3' className="element">
          <Experience />
        </Element>
        <Element name='layer-4' className="element">
          <Projects />
        </Element>
        <Element name='layer-5' className="element">
          <Contact />
        </Element>
      </Layout>
    )
  }
}

export default IndexPage
