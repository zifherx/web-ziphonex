import { Header } from '@/components/shared/Header';
import { NewHeader } from '@/components/shared/New-Header';
import { Footer } from '@/components/shared/Footer';

import { GENERAL_TYPE } from '@/common/types';

export default function PublicLayout({ children }: Readonly<GENERAL_TYPE>) {
  return (
    <div>
      <NewHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
