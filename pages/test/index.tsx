import React from 'react';
import styled from '@emotion/styled';
import test from '../test/test.module.scss';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default function index() {
  return <Button className={test.btn}>test</Button>;
}
