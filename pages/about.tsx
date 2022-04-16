import Link from 'next/link';
import { ReactElement } from 'react';
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainlLayout } from '../components/layout/MainlLayout';

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainlLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainlLayout>
  );
};
