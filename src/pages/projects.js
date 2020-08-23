import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import * as style from  '../styles/projects.module.scss'
import ProjectCard from '../components/ProjectCard';

const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/projects/"} }, sort: { fields: [frontmatter___order], order: DESC }) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              name
              description
              type
              github
              site
              image {
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

  const projectList = data.allMarkdownRemark.edges
  
  return (
    <div className={style.main}>
      <h2 className={style.title}>Personal Projects</h2>
      <div className={style.projectList}>
        {projectList.map(({ node: { frontmatter: project } }, index) => {
          return (
            <ProjectCard
              name={project.name}
              description={project.description}
              type={project.type}
              github={project.github}
              site={project.site}
              image={project.image.childImageSharp.fluid}
            />
          )
        }
        )}
      </div>
    </div>
  )
}

export default Projects
