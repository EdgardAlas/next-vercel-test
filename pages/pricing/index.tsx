import { MainlLayout } from '../../components/layout/MainlLayout';
import Link from 'next/link';

export default function Pricing() {
  return (
    <MainlLayout>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/home'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.js</code>
      </p>
    </MainlLayout>
  );
}
