import Link from 'next/link';
import { MainlLayout } from '../components/layout/MainlLayout';

export default function About() {
  return (
    <MainlLayout>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/contact.js</code>
      </p>
    </MainlLayout>
  );
}
