import { MainlLayout } from '../components/layout/MainlLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainlLayout>
      <h1>Home Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/about'>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/index.js</code>
      </p>
    </MainlLayout>
  );
}
