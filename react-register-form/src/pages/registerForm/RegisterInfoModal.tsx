import React from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import { FormValues } from './RegisterCard';

// TODO: Move to component, to be a general modal

const InfoContatiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const InfoItemTitle = styled.div`
  width: 8rem;
`;

type ModalProps = {
  registerInfo: FormValues;
  visible: boolean;
  onClickOkFn: Function;
};

const RegisterInfoModal: React.FC<ModalProps> = ({ registerInfo, visible, onClickOkFn }) => {
  const { creditCardNo, cvc, expireDate } = registerInfo.register;
  return (
    <>
      <Modal title='Register Confirmation' visible={visible} onOk={() => onClickOkFn()} onCancel={() => onClickOkFn()}>
        <InfoContatiner>
          <InfoWrapper>
            <InfoItemTitle>Credit card no. :</InfoItemTitle>
            {creditCardNo}
          </InfoWrapper>
          <InfoWrapper>
            <InfoItemTitle>CVC: </InfoItemTitle>
            {cvc}
          </InfoWrapper>
          <InfoWrapper>
            <InfoItemTitle>Expire Date: </InfoItemTitle>
            {expireDate}
          </InfoWrapper>
        </InfoContatiner>
      </Modal>
    </>
  );
};

export default RegisterInfoModal;
