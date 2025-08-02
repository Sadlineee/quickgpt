import { useState } from 'react'
import { MessageProps } from '@/types/MessageProps'
import { roboto_mono } from '@/fonts/fonts'
import { Button, ButtonsBox, ChatBox, Message, MessagesBox, TextField } from './Chat.styled'

export default function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }])
      setInputValue('')

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Ответ от бота', isUser: false }
        ])
      }, 1000)
    }
  }

  return (
    <ChatBox>
      <MessagesBox>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
      </MessagesBox>
      <TextField 
        className={roboto_mono.className} 
        value={inputValue}
        placeholder='Введите сообщение...'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ButtonsBox>
        <Button onClick={() => sendMessage()}>Отправить</Button>
        <Button onClick={() => setMessages([])}>Очистить чат</Button>
      </ButtonsBox>
    </ChatBox>
  )
}