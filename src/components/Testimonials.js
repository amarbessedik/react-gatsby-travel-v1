import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
// import { GiFlexibleStar } from "react-icons/gi"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-2", "testimonial-3"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What people are saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Michael</h3>
            <p>
              "The greatest experience of my life! It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accomodation."
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sarah Kin</h3>
            <p>
              "It was so easy to set up my trip! They answered all my questions
              right away and gave me the best price out of all the companies
              researched."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Image key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  /* color: #077bf1; */
  font-size: 5rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-weight: 200;
  text-align: center;
`
const Description = styled.p`
  text-align: center;
  padding: 3rem;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 200;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr;
  }
`
const Testimonial = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;

  h3 {
    /* margin-bottom: .5rem; */
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 200;
    color: #077bf1;
  }
  p {
    color: #3b3b3b;
    margin-bottom: 1.5rem
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: 1000px;
  }
`
const Image = styled(Img)`
  border-radius: 10px;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`
