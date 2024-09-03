import Link from "next/link";

export function Footer() {
  return (
    <div className="h-40 bg-gray-100 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div>Drive</div>

        <Link className="text-blue-900 hover:text-blue-500" href="/privacy">
          Privacy Policys
        </Link>
        <Link
          className="text-blue-900 hover:text-blue-500"
          href="/terms-of-service"
        >
          Terms of Service
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="/about">
          About
        </Link>
      </div>
    </div>
  );
}
