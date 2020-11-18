import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    
    
    
    `)


    return(
        <footer>
            <p>
                This page was developed by {data.site.siteMetadata.author}.
            </p>
        </footer>
    )
}

export default Footer