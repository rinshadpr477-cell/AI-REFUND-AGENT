export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
       
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
               RefundAI
            </h3>
            <p className="text-sm text-gray-400">
              Smart refund decisions powered by intelligent policies
            </p>
          </div>

      
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition" >
                  Home
                </a>
              </li>
              <li>
                <a href="/admin/login" className="hover:text-blue-400 transition">
                  Admin Login
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-4">
              Contact
            </h4>
            <p className="text-sm">Jobform Automator</p>
            <p className="text-sm text-gray-400">
              +91 999999999
            </p>
          </div>
        </div>

      
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 RefundAI.
          </p>
        </div>
      </div>
    </footer>
  );
}