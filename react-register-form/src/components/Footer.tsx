import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { IChildren } from '../types/index';

const { Footer: AntdFooter } = Layout;

const CustomFooter = styled(AntdFooter)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Footer: React.FC<IChildren> = ({ children }) => <CustomFooter>{children}</CustomFooter>;

export default Footer;
