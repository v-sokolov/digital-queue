import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Card, Container, Row, Spacer } from '@nextui-org/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextController, PasswordController } from '../components';
import { loginFormSchema } from '../validation';
import { LoginFormInput } from '../interfaces';
import { login } from '@application/services/authorization.service';

export const LoginPage: React.FC = () => {
  const { control, handleSubmit } = useForm<LoginFormInput>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginFormSchema)
  });

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    await login(data);
  };

  return (
    <Container fluid>
      <Card css={{ $$cardColor: '$color$cardBackground' }}>
        <Card.Header>Login</Card.Header>
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
            <Button onClick={handleSubmit(onSubmit)} color="gradient" shadow>
              Login
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
