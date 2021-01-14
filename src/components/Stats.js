import React from 'react'
import styled from 'styled-components'
import {StatsData} from '../data/StatsData'


const Stats = () => {
    return (
      <StatsContainer>
        <Heading>Why Choose Us</Heading>
        <StatsWrapper>{StatsData.map((item, key)=>(
            <StatsBox key={key}>
                <Icon>{item.icon}</Icon>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
            </StatsBox>
        ))}</StatsWrapper>
      </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem calc((100vw - 1300px) / 2);

`
const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
  font-size: 3rem;
  font-weight: 200;
`
const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.2rem;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`
const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f26a2e;
`
const Title = styled.h3`
   font-size: clamp(1rem, 2.5vw, 1.5rem);
   font-weight: 200;
   margin-bottom: 10px;
`
const Description = styled.p``