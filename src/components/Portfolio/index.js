import React from 'react'
import Icon1 from '../../assets/images/svg-1.svg'
import Icon2 from '../../assets/images/svg-2.svg'
import Icon3 from '../../assets/images/svg-2.svg'
import Icon4 from '../../assets/images/svg-1.svg'
import Icon5 from '../../assets/images/svg-2.svg'
import Icon6 from '../../assets/images/svg-1.svg'
import { PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioCard, PortfolioIcon, PortfolioH2, PortfolioP  } from './PortfolioElements'

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
        <PortfolioH1>Some of my work</PortfolioH1>
        <PortfolioWrapper>
            <PortfolioCard>
                <PortfolioIcon src={Icon1} />
                <PortfolioH2>Reduce</PortfolioH2>
                <PortfolioP>The quick brown fox jumped over the lazy cat</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon2} />
                <PortfolioH2>Bozo</PortfolioH2>
                <PortfolioP>This is another project of mine..</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon3} />
                <PortfolioH2>Tempt</PortfolioH2>
                <PortfolioP>Look im running out of ideas here</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon4} />
                <PortfolioH2>Tempt</PortfolioH2>
                <PortfolioP>Send help</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon5} />
                <PortfolioH2>Tempt</PortfolioH2>
                <PortfolioP>Send help</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon6} />
                <PortfolioH2>Tempt</PortfolioH2>
                <PortfolioP>Send help</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon6} />
                <PortfolioH2>Tempt</PortfolioH2>
                <PortfolioP>Send help</PortfolioP>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioIcon src={Icon6} />
                <PortfolioH2>Tempt</PortfolioH2>
                <PortfolioP>Send help</PortfolioP>
            </PortfolioCard>
        </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio