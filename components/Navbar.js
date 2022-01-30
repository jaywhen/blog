import Link from "next/link";

const Navbar = () => {
    const links = [
        {name: 'blog', to: '/blog'},
        {name: 'rss', to: '/rss'},
    ];
    return (
        // <header className="flex justify-between z-4 font-extrabold leading-4 text-slate-600 backdrop-opacity-10 backdrop-invert bg-white/30">
        //     <Link href='/'>Jaywhen</Link>
        //     <div>
        //         {links.map((link, i) => (
        //             <li key={i} className="inline ml-4 list-none">
        //                 <Link href={link.to}>
        //                     <a>{link.name}</a>
        //                 </Link>
        //             </li>
        //         ))}
        //     </div>
        // </header>
        <header className="fixed right-0 text-xl left-0 z-4 font-extrabold leading-4 text-slate-600 backdrop-blur-sm bg-white/30">
            <div className="flex justify-between h-10 max-w-2xl items-center mx-auto px-6">
                <Link href='/'>Jaywhen</Link>
                <div>
                    {links.map((link, i) => (
                        <li key={i} className="inline ml-4 list-none">
                            <Link href={link.to}>
                                <a>{link.name}</a>
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
