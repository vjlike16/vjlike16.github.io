import 'bootstrap/dist/css/bootstrap.css';
import './globals.scss';

export const metadata = {
  title: 'Vijay Kumar Sharma',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='light-theme'>{children}</body>
    </html>
  );
}
