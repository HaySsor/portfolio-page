import Crab from '@/components/Crab/Crab';
import './globals.css';
import {Montserrat} from 'next/font/google';
import NavbarContainer from '@/components/NavbarContainer/NavbarContainer';
import {DialogEndProvider} from './Context/DialogEnd';

const inter = Montserrat({subsets: ['latin']});

export const metadata = {
  title: 'Portfolio Page',
  description: 'This is a My personal Portfolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DialogEndProvider>
          <div className='wrapper'>
            <NavbarContainer />
            {children}
          </div>
        </DialogEndProvider>
      </body>
    </html>
  );
}
