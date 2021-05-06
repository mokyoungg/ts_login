import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useForm from './utils/useForm';

const SignUp: React.FC = () => {
  const { handleChange, handleError, values, errors } = useForm();

  return (
    <Wrap>
      <InputSection>
        <InputContainer>
          <InputWrap>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              value={values.username}
            />
          </InputWrap>
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <InputWrap>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              value={values.email}
            />
          </InputWrap>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <InputWrap>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
            />
          </InputWrap>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <InputWrap>
            <Label>Password2</Label>
            <Input
              type="password"
              name="password2"
              placeholder="Enter your password again"
              onChange={handleChange}
              value={values.password2}
            />
          </InputWrap>
          {errors.password2 && <ErrorMessage>{errors.password2}</ErrorMessage>}
        </InputContainer>
      </InputSection>
      <button onClick={() => handleError()}> 에러확인</button>
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid red;
  margin: 0 auto;
`;

const InputSection = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InputContainer = styled.div`
  border: 1px solid blue;
  width: 350px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 200px;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;
