import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { IChildren } from '../types/index';

const { Content: AntdContent } = Layout;

const CustomContent = styled(AntdContent)`
  margin-top: 5rem;
  padding: 0 50px;
  min-height: 80%;
  display: flex;
  justify-content: center;
`;

const Content: React.FC<IChildren> = ({ children }) => <CustomContent>{children}</CustomContent>;

export default Content;
