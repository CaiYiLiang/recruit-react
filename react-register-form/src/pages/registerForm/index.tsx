import React from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import RegisterCard from './RegisterCard';
import history from '../../utils/history';
import ROUTE from '../../constants/routes';

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.WHITE};
`;

const HeaderTitle = styled.div`
  margin: auto 1rem;
  font-size: 1.5rem;
`;

const HeaderButton = styled(Button)`
  size: large;
  border: 0;
`;

const RegisterForm: React.FC = () => (
  <Layout>
    <Header>
      <HeaderContent>
        <HeaderButton ghost icon={<MenuOutlined />} onClick={() => history.push(ROUTE.MENU)} />
        <HeaderTitle>Register Card Form</HeaderTitle>
      </HeaderContent>
    </Header>
    <Content>
      <RegisterCard />
    </Content>
    <Footer>
      Create by
      <Button type='link' href={ROUTE.PROFOLIO} target='_blank'>
        Cherry Liang
      </Button>
    </Footer>
  </Layout>
);

export default RegisterForm;
