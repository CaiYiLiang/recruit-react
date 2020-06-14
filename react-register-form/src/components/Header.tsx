import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Header: AntdHeader } = Layout;
import { IChildren } from '../types/index';

const CustomHeader = styled(AntdHeader)`
  position: fixed;
  zindex: 1;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
`;

const Header: React.FC<IChildren> = ({ children }) => <CustomHeader>{children}</CustomHeader>;

export default Header;
