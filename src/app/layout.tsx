import type { Metadata } from 'next'
import Providers from '../context/ReactQueryProvider'
import './layout.css';

export const metadata: Metadata = {
  title: 'Pokedex',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}

export default RootLayout;