import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
              About 
            </h1>
            <p className="text-xl text-gray-600">
              Your secure and efficient file management solution
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
              <p className="font-bold">Note:</p>
              <p>Drive is an educational project designed to showcase web development skills. While it demonstrates key concepts in file management and user interface design, it is not intended for professional use.</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              At Drive, we're committed to providing a learning platform that simulates a seamless and secure file storage and sharing experience. Our goal is to demonstrate how file management systems can be simplified while maintaining high standards of data protection and accessibility.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Simulated secure cloud storage with mock end-to-end encryption</li>
              <li>Demonstration of file sharing and collaboration tools</li>
              <li>Intuitive user interface for educational purposes</li>
              <li>Example of cross-platform compatibility concepts</li>
              <li>Showcase of robust organization features for file management</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Drive?</h2>
            <p className="mb-6">
              Drive is an excellent educational tool that combines modern web development techniques with user-friendly design principles. It serves as a practical example for students, aspiring developers, and anyone interested in learning about file management systems and web application development.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="mb-6">
              As an educational project, Drive is committed to helping learners understand the complexities of building secure and efficient web applications. It serves as a platform for exploring new features, implementing best practices, and discussing important concepts in data security and user privacy.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard/files"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore the Demo
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Back to Home <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
