import React from "react";
import thumbnail1 from "../../assets/images/thumbnail1.jpg";
import thumbnail2 from "../../assets/images/thumbnail2.jpg";
import thumbnail3 from "../../assets/images/thumbnail3.jpg";

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <a 
        href="https://www.youtube.com/watch?v=uU7YL-YR0AI&list=PLy7i9HV3Uu5Qg5_wtpd75S7mLJQeuJUYA&index=2" target="_blank">
          <PortfolioCard>
            <PortfolioIcon src={thumbnail1} />
            <PortfolioH2>Her </PortfolioH2>
            <PortfolioP>FLM212 Final</PortfolioP>
          </PortfolioCard>
        </a>
        <a
        href="https://www.youtube.com/watch?v=_R9mqqx13WQ&list=PLy7i9HV3Uu5Qg5_wtpd75S7mLJQeuJUYA&index=1" target="_blank">
          <PortfolioCard>
            <PortfolioIcon src={thumbnail2} />
            <PortfolioH2>Facial Action Coding System</PortfolioH2>
            <PortfolioP>This is another project of mine..</PortfolioP>
          </PortfolioCard>
        </a>
        <a
        href="https://www.youtube.com/watch?v=x6i-Z5WBp10&list=PLy7i9HV3Uu5Qg5_wtpd75S7mLJQeuJUYA&index=3" target="_blank">
          <PortfolioCard>
            <PortfolioIcon src={thumbnail3} />
            <PortfolioH2>A new age for comics</PortfolioH2>
            <PortfolioP>Look im running out of ideas here</PortfolioP>
          </PortfolioCard>
        </a>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
