import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

export const metadata = {
  title: 'Vijay Kumar Sharma',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={{ backgroundColor: '#DBE2EF' }}>{children}</body>
    </html>
  );
}
