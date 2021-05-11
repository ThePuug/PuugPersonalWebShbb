import React from "react"
import styled from "styled-components"

const Section = styled.div`
  width:100%;
  margin: 0;
  > div {
    max-width: 1199px;
    margin: 0 auto;
    padding: 50px 16px;
    @media (min-width: 992px) {
      padding: 50px;
    }
  }
`

const MergeSection = styled(Section)`
  > div {
    padding: 0 16px 50px;
    @media (min-width: 992px) {
      padding: 0 50px 50px;
    }
  }
`

const Component = (props) => {
  return <>
    {props.merge &&
      <MergeSection {...props}>
        <div>
          {props.children}
        </div>
      </MergeSection>
    }
    {!props.merge &&
      <Section {...props}>
        <div>
          {props.children}
        </div>
      </Section>
    }
  </>
}

export default Component