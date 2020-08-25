import React from 'react'
import AwesomeDebouncePromise from 'awesome-debounce-promise';

// ES6 Imports
import { Link, Element } from 'react-scroll';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../sections/landing'
import About from '../sections/about'
import Experience from '../sections/experience'
import Projects from '../sections/projects'
import Footer from '../sections/footer';

import * as style from  '../styles/style.module.scss'

class IndexPage extends React.Component {
  state = {
    darkMode: false,
  }

  componentDidMount() {}

  toggleDarkMode = () => {
    this.setState({ darkMode: true });
  }

  toggleLightMode = () => {
    this.setState({ darkMode: false });
  }

  render() {
    const { darkMode } = this.state;

    return (
      <Layout>
        <SEO title="Felix Mangundap" keywords={[`Fransiskus Felix Mangundap`, `Felix Mangundap`, `Felix`, 'Waterloo']} />
        {/* <div className={style.modeToggle}>
          <a onClick={this.toggleLightMode} className={`${style.mode} ${darkMode ? null : style.modeSelected}`}>light side</a>
          <p className={style.modeDivider}>/</p>
          <a onClick={this.toggleDarkMode}className={`${style.mode} ${darkMode ? style.modeSelected : null}`}>dark side</a>
        </div> */}
        <Landing darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
