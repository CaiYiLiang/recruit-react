import React from 'react';
import { Layout as antdLayout } from 'antd';
import styled from 'styled-components';
import { IChildren } from '../types/index';

const CustomLayout = styled(antdLayout)`
  height: 100vh;
`;

const Layout: React.FC<IChildren> = ({ children }) => <CustomLayout>{children}</CustomLayout>;

export default Layout;
