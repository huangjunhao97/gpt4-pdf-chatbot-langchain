import Image from 'next/image';
interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 flex items-center">
          <nav className="ml-4 pl-6">
            <a href="#" className="hover:text-slate-600 cursor-pointer">
              <Image src="/logo.png" width={150} height={64} alt="logo" />
            </a>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <main className="flex w-full flex-1 flex-col overflow-hidden bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
