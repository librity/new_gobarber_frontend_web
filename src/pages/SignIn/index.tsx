import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import parseValidationErrors from '../../utils/parseValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToaster } from '../../hooks/toaster';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { popToast } = useToaster();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatoria'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;
        await signIn({ email, password });

        popToast({
          type: 'success',
          title: 'Sucesso!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const unformErrors = parseValidationErrors(error);

          formRef.current?.setErrors(unformErrors);
        }

        popToast({
          type: 'error',
          title: 'Falha na autenticacao',
          description:
            'Ocorreu um erro no seu login, verifique suas credencias.',
        });
      }
    },
    [signIn, popToast],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faca seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
