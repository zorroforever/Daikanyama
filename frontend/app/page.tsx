import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">Daikanyama</h1>
          <div className="space-x-4">
            <Link href="/login" className="btn-secondary">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Secure Password Manager
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Store your passwords, secure notes, and sensitive information with end-to-end encryption.
                Your data is encrypted with your master password, which is never stored on our servers.
              </p>
              <div className="mt-8 space-x-4">
                <Link href="/register" className="btn-primary px-6 py-3 text-lg">
                  Get Started
                </Link>
                <Link href="/about" className="btn-secondary px-6 py-3 text-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="card w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
                <div className="space-y-4">
                  <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                  <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                  <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                  <div className="h-12 bg-primary-100 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center text-gray-900">Key Features</h3>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-md flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">End-to-End Encryption</h4>
                <p className="mt-2 text-gray-600">
                  Your data is encrypted with AES-256 using your master password, which is never stored on our servers.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-md flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Organized Categories</h4>
                <p className="mt-2 text-gray-600">
                  Organize your data with categories and subcategories for easy access and management.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-md flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Multi-Platform Access</h4>
                <p className="mt-2 text-gray-600">
                  Access your data from any device with a web browser, securely and conveniently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold">Daikanyama</h3>
              <p className="mt-2 text-gray-300">Secure Password Manager</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider">Support</h4>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Daikanyama. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 