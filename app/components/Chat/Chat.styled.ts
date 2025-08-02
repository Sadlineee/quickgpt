import styled from 'styled-components'

export const ChatBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 5rem 0;
  padding: 0.5rem;
  height: 35rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`

export const MessagesBox = styled.div`
  padding-right: 0.5rem;
  height: 70%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50px;
  }
`

export const Message = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${(props) => (props.isUser ? '#33FF66' : '#FFFFFF')};
  border-radius: 5px;
`

export const TextField = styled.textarea`
  padding: 0.5rem;
  height: 25%;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 8%;
`

export const Button = styled.button`
  height: 100%;
  width: 10rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    border-radius: 50px;
  }
`