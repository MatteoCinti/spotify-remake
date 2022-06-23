import React from 'react';
import { getProviders } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { ...providers },
  };
}

function renderLoginButtons({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div>
            <button type="submit">Login with {provider.name}</button>
          </div>
        ))}
    </>
  );
}

function Login({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  console.log('🚀 ~ file: index.tsx ~ line 15 ~ providers', providers);
  return (
    <div>
      <h1>This is the Login Page</h1>
      {renderLoginButtons({ providers })}
    </div>
  );
}

export default Login;
