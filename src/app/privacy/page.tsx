import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-8">
          <div className="text-center mb-12">
            <Image
              src="/logo.png"
              width="100"
              height="100"
              alt="file drive logo"
              className="inline-block mb-8"
            />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us at Drive
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
              <p className="font-bold">Note:</p>
              <p>This is a learning project and not a professional application. The privacy policy below is for educational purposes only.</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us when you create an account, upload files, or interact with our service. This may include your name, email address, and the content of files you store on our platform.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>To send technical notices, updates, and support messages</li>
              <li>To respond to your comments and questions</li>
              <li>To protect against, investigate, and prevent fraudulent or illegal activities</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-6">
              We implement robust security measures to protect your personal information and files. This includes encryption of data in transit and at rest, regular security audits, and strict access controls for our employees.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-6">
              You have the right to access, correct, or delete your personal information. You can also request a copy of the data we hold about you. To exercise these rights, please contact our support team.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last Updated&quot; date.
            </p>

            <p className="text-sm text-gray-600 mt-8">
              Last Updated: 2023-05-23
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard/files"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back to Dashboard
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
