import styled from 'styled-components'

export const TopSectionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6.5rem 0;

  @media 
  ${({ theme }) => theme.media.small},
  ${({ theme }) => theme.media.extraSmall} 
  {
    margin: 5rem 0;
  }
`

export const PrimaryText = styled.span`
  width: 50%;
  font-size: 5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 20px 20px 100px ${({ theme }) => theme.colors.primary};

  @media
  ${({ theme }) => theme.media.medium}, 
  ${({ theme }) => theme.media.small}, 
  ${({ theme }) => theme.media.extraSmall} 
  {
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
  }
`

export const Shape = styled.div`
  aspect-ratio: 1;
  margin-left: 12%;
  width: 38%;
  border: 12px solid ${({ theme }) => theme.colors.primary}; 
  --s: 100px;
  mask: 
    conic-gradient(at var(--s) var(--s),#0000 75%,#000 0) 
    0 0/calc(100% - var(--s)) calc(100% - var(--s));

  @media 
  ${({ theme }) => theme.media.medium}, 
  ${({ theme }) => theme.media.small}, 
  ${({ theme }) => theme.media.extraSmall} 
  {
    display: none;
  }
`