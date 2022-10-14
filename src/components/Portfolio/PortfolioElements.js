import styled from 'styled-components'


export const PortfolioContainer = styled.div`
    height:941px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }
    
    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const PortfolioWrapper = styled.div`
max-width: 2000px;
size: 10;
overflow: none;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 25px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
    }
`
export const PortfolioCard = styled.div`
background: transparent;
display: flex;
max-height: 100%;
height: 300px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
}
`
export const PortfolioIcon = styled.img`
height: 160px;
width: 250px;
margin-bottom: 10px;
`
export const PortfolioH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 80px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const PortfolioH2 = styled.h1`
font-size: 1rem;
color: #fff;
margin-bottom: 10px;
`

export const PortfolioP = styled.p`
font-size: 1rem;
color: #fff;
text-align: center
`