import React from 'react';
import { Button, Card, Container, Row, Spacer } from '@nextui-org/react';
import { PasswordController, TextController } from '../components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpFormInput } from '../interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormSchema } from '../validation';

export const SignUpPage: React.FC = () => {
  const { control, handleSubmit } = useForm<SignUpFormInput>({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    resolver: yupResolver(signUpFormSchema)
  });

  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
    // TODO: implement logic
  };

  return (
    <Container fluid>
      <Card css={{ $$cardColor: '$color$cardBackground' }}>
        <Card.Header>Sign Up</Card.Header>
        <Card.Body>
          <Row>
            <TextController name={'email'} label={'Email'} control={control} />
          </Row>
          <Spacer y={1} />

          <Row>
            <PasswordController name={'password'} label={'Password'} control={control} />
          </Row>
          <Spacer y={1} />

          <Row>
            <TextController name={'firstName'} label={'Name'} control={control} />
          </Row>
          <Spacer y={1} />

          <Row>
            <TextController name={'lastName'} label={'Surname'} control={control} />
          </Row>
          <Spacer y={1} />

          <Row>
            <TextController name={'phone'} label={'Phone'} control={control} />
          </Row>
          <Spacer y={1} />

          <Row>
            <Button onClick={handleSubmit(onSubmit)} color="gradient" shadow>
              Sign Up
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
