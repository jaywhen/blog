import Image from "next/image";
import Link from "next/link";
import FontLink from "./FontLink";

const Main = () => {
  return (
      <>
        <div className="mt-18 drop-shadow-md">
            <Image
              className="bg-slate-300 rounded-full"
              src="/avatar.jpg"
              alt="avatar"
              width={120}
              height={120}
              priority
              />
        </div>
        <h1 className="mt-5 tracking-wide font-bold text-2xl [text-shadow:9px_1px_4px_#617aaabf]">
          <ruby className="font-long-cang text-3xl">向杰文<rt className="font-sans">xiàng jié wén</rt></ruby> / Jaywhen Xiang
        </h1>
        <Link href="https://twitter.com/jaywhen6"><a target="_blank" rel="noopener noreferrer" className="underline font-semibold text-slate-500">@jaywhen6</a></Link>
        <div className="mt-5 leading-loose text-lg tracking-wide">
          <p>I&apos; m a developer based in China. Mainly using <strong><em>JavaScript</em></strong> to build things.</p>
          <p>
            This blog is built using <FontLink text="Next.js" link="https://nextjs.org/" /> and <FontLink text="Notion API" link="https://developers.notion.com/" />
            ,&nbsp;source code are <FontLink text="here" link="https://github.com/jaywhen/blog" />.
          </p>
          <hr className="my-5" />
          <FontLink text="Hire me" link="/resume.pdf" />
          <br />
          Find me on <FontLink text="GitHub" link="https://github.com/jaywhen" />, <FontLink text="Twitter" link="https://twitter.com/jaywhen6" />. 
          <br />
          Mail me at <FontLink text="jaywhen@gmail.com" link="mailto:jaywhen@gmail.com" />.
        </div>
      </>
  );
};

export default Main;
