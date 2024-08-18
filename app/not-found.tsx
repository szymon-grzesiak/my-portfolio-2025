import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import emptyListImage from "../assets/no-results.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative w-screen flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold [text-shadow:_1px_1px_1px_rgb(0_0_255_/_40%)]">
          Unfortunately, page was not found.
        </h1>
      </div>
      <Image
        src={emptyListImage}
        alt="Page not found"
        width={400}
        height={400}
      />
      <Link
        href="/"
        className="bg-slate-300 flex px-6 py-3 rounded-xl gap-3 hover:bg-opacity-80"
      >
        <ArrowLeft className="animate-bounce-horizontal dark:text-black" />
        <div className="text-black">
            Go back
            </div>
      </Link>
    </div>
  );
};

export default NotFound;
