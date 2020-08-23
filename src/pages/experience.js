import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import * as style from  '../styles/experience.module.scss'
import ExperienceCard from '../components/ExperienceCard';

const Experience = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/experience/"} }, sort: { fields: [frontmatter___order], order: DESC }) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              name
              location
              title
              description
              logo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                  }
                }      
              }
            }
          }
        }
      }
    }
  `);

  const experienceList = data.allMarkdownRemark.edges
  
  return (
    <div className={style.main}>
      <h2 className={style.title}>Work Experience</h2>
      <div className={style.experienceList}>
        {experienceList.map(({ node: { frontmatter: experience } }, index) => {
          return (
            <div className={style.experienceCardContainer}>
              <ExperienceCard
                name={experience.name}
                location={experience.location}
                title={experience.title}
                description={experience.description}
                logo={experience.logo.childImageSharp.fluid}
              />
              {index < experienceList.length - 1 ?
                <div className={style.divider} /> : null
              }
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Experience
