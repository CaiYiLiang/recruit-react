import React, { useState } from 'react';
import { Form, InputNumber, Button, DatePicker } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import RegisterInfoModal from './RegisterInfoModal';

const FormItem = Form.Item;

const RegisterContainer = styled.div`
  margin: 1rem;
  width: 80%;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: ${COLOR.WHITE};
  overflow: scroll;
`;

const GreetText = styled.div`
  font-size: 2rem;
  margin: 2rem 6rem;
`;

const FormContainer = styled.div``;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 12 },
};

const validateMessages = {
  required: 'This field is required!',
  types: {
    number: 'It is not a validate number!',
    date: 'It is not a validate date!',
  },
};

export type FormValues = {
  register: {
    creditCardNo: Number;
    cvc: Number;
    expireDate: Date;
  };
};

const RegisterCard: React.FC = () => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const [form] = Form.useForm();

  const checkFormErrors = () => {
    const failedField = form.getFieldsError().find(field => field.errors.length > 0);
    const { register } = form.getFieldsValue();
    const { creditCardNo, cvc, expireDate } = register;
    const numberFields = typeof creditCardNo === 'number' && typeof cvc === 'number';
    const formatedDate = expireDate && expireDate.format('YYYY-MM-DD');

    if (!failedField && formatedDate && numberFields) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  return (
    <RegisterContainer>
      <GreetText>Welcome</GreetText>
      <FormContainer>
        <Form
          {...layout}
          form={form}
          name='register-form'
          data-testid='register-form'
          onFinish={({ register }) => {
            const { creditCardNo, cvc, expireDate: expireAt } = register;
            const expireDate = expireAt.format('YYYY-MM-DD');
            const sortedValues = { register: { creditCardNo, cvc, expireDate } };
            console.log('submit register', sortedValues);
            setSubmitValues(sortedValues);
            setShowConfirmModal(true);
          }}
          validateMessages={validateMessages}
        >
          <FormItem
            name={['register', 'creditCardNo']}
            label='Credit Card No.'
            rules={[{ required: true, type: 'number' }]}
          >
            <InputNumber
              placeholder='Credit Card No.'
              style={{ width: 'calc(80% - 10px)' }}
              onChange={checkFormErrors}
              data-testid='credit-card-no'
            />
          </FormItem>

          <FormItem name={['register', 'cvc']} label='CVC' rules={[{ required: true, type: 'number' }]}>
            <InputNumber placeholder='CVC' onChange={checkFormErrors} data-testid='cvc' />
          </FormItem>
          <FormItem name={['register', 'expireDate']} label='Expire Date' rules={[{ required: true, type: 'object' }]}>
            <DatePicker onChange={checkFormErrors} data-testid='expire-date' />
          </FormItem>

          <FormItem wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button type='primary' htmlType='submit' disabled={!canSubmit} data-testid='submit-button'>
              Submit
            </Button>
          </FormItem>
        </Form>
      </FormContainer>
      {submitValues && (
        <RegisterInfoModal
          registerInfo={submitValues}
          visible={showConfirmModal}
          onClickOkFn={() => setShowConfirmModal(false)}
        />
      )}
    </RegisterContainer>
  );
};

export default RegisterCard;
