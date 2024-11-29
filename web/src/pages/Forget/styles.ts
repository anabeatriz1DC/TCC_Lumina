import styled from 'styled-components';


interface MessageProps {
  error?: boolean; 
}

export const Message = styled.p<MessageProps>`
  text-align: center;
  color: ${(props) => (props.error ? 'red' : 'green')};
  font-size: 1rem;
  margin-bottom: 15px;
`;



export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #a86ace;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 50px;
  background-color: #ffff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top:100px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #D0B3E0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-left:10px;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #944abc;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  
`;