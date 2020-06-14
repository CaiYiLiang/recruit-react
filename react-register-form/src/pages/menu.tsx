import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import COLOR from '../constants/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Layout from '../components/Layout';
import history from '../utils/history';
import ROUTE from '../constants/routes';

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

const MenuContainer = styled.div`
  margin: 1rem;
  width: 80%;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: ${COLOR.WHITE};
  overflow: scroll;

  font-size: 2rem;
`;

const RegisterForm: React.FC = () => (
  <Layout>
    <Header>
      <HeaderContent>
        <HeaderButton ghost icon={<ArrowLeftOutlined />} onClick={() => history.push(ROUTE.ROOT)} />
        <HeaderTitle>Menu</HeaderTitle>
      </HeaderContent>
    </Header>
    <Content>
      <MenuContainer>This is menu content</MenuContainer>
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
