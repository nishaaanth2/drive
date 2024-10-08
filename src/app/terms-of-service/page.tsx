import Image from "next/image";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using Drive
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
              <p className="font-bold">Important Note:</p>
              <p>Drive is an educational project and not a professional application. These terms of service are for learning purposes only.</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using Drive, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-6">
              Drive is an educational demonstration of a file storage and sharing platform. It is not intended for storing sensitive or important data.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>You are responsible for maintaining the confidentiality of your account information.</li>
              <li>You agree to use the service only for lawful purposes.</li>
              <li>You understand that this is an educational project and should not be relied upon for actual file storage needs.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-6">
              The content, features, and functionality of Drive are owned by the project creators and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">
              As an educational project, Drive and its creators are not liable for any damages or losses related to your use of the service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. Please review these terms periodically for changes.
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
