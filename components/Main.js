import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
      <div>
          <div className="mt-20 drop-shadow-md">
              <Image
                className="bg-slate-300 rounded-full"
                src="/avatar.jpg"
                alt="avatar"
                width={120}
                height={120}
                priority
                />
          </div>
          <h1 className="mt-5 font-bold text-2xl">Jaywhen Xiang</h1>
          <Link href="https://twitter.com/jaywhen6"><a target="_blank" rel="noopener noreferrer" className="underline font-semibold text-slate-500">@jaywhen6</a></Link>
          <p className="mt-5 text-lg">I&apos; m a undergraduates from China. I want to be a front-end dev.</p>
      </div>
  );
};

export default Main;
