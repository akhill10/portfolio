// import { Link } from "gatsby"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {

  const data = useStaticQuery(
    graphql`
      query {
        headerImage: file(relativePath: {eq: "web-kb.png"}) {
          id
          childImageSharp {
            fluid (maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="heading">
      <div className="headerImage">
        <Img fluid={data.headerImage.childImageSharp.fluid} ></Img>
      </div>
      <div className="headerText">
        <h1 className="headerName">
          Hey there <span role="img" aria-label="wave">👋</span> I'm <b>Pawan Akhil Dasari</b><span role="img" aria-label="boy with laptop">👨‍💻</span>
        </h1>
        <h2 className="headerNameSubtext">
          Eliminate's Repetitive Tasks ! Like to automate and develop Things that helps the real world. <br></br>
        </h2>
        <h2 className="skill">
        
          <b>Skills </b> <br></br>
          <hr></hr>
         
          <b> Programming:</b>[ C/C++, Python, Java ]<br></br><br></br>
          <b> Web Framework:</b>  [ Angular 6/7, NodeJS, Express, HTML/CSS, TypeScript, REST-API, Django, GraphQL]<br></br><br></br>
          <b> Database/Tools:</b> [ MongoDB, MySQL, Firebase, Elastic Search (Beginner), Git ]<br></br>
          
        </h2>
        <h3>
         

        </h3>
      </div>
    </div>
  )
}

export default Header