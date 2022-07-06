import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    const navList = [
        { text: 'UI Design', link: 'posts' },
        { text: 'Frontend', link: 'posts' },
        { text: 'Backend', link: 'posts' },
        { text: 'Software Engineering', link: 'posts' },
    ];

    return (
        <>
            <div className={`transition duration-500 ${hamburger ? 'fixed z-10 min-h-screen w-screen bg-slate-800/80 lg:opacity-0' : 'static opacity-0'}`}> </div>
            <nav className='px-4'>
                <div className="container py-6">
                    <div className="flex flex-wrap items-center">
                        <div className="w-2/3 flex items-center ">
                            <Link href="/">
                                <a className='flex items-center'>
                                    <div className='w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center font-semibold mr-2'>E</div>
                                    <h3 className='font-semibold text-lg mr-16'>EpicGames</h3>
                                </a>
                            </Link>
                            <ul className={`transition duration-500 lg:flex gap-8 ${hamburger ? ' fixed lg:static z-20 lg:space-y-0  top-0 right-0 bg-gray-700 min-h-screen lg:min-h-0 w-96 lg:w-auto p-5 lg:p-0 space-y-2 lg:bg-transparent' : 'hidden'}`}>
                                {hamburger && (
                                    <li className="absolute lg:hidden right-3 top-3 h-8 w-8 bg-slate-800/80 rounded-md cursor-pointer flex flex-col items-center justify-center p-2" onClick={() => setHamburger(!hamburger)}>
                                        <span className='w-full block h-[2px] bg-slate-200 rotate-45 translate-x-[1px]'></span>
                                        <span className='w-full block h-[2px] bg-slate-200 -rotate-45 -translate-y-[2px]'></span>
                                    </li>
                                )}
                                {navList.map(({ text, link }) => (
                                    <li key={text}><Link href={link}><a className='hover:text-gray-300'>{text}</a></Link></li>
                                ))}

                            </ul>
                        </div>
                        <div className="w-1/3 text-right">
                            <input type="text" className='hidden lg:block w-full lg:max-w-xs  lg:ml-auto bg-gray-700 py-3 px-5 pl-10 rounded-full bg-search focus:outline-none focus:ring-2 focus:ring-violet-700' placeholder='Search' />
                            <button className={`h-10 w-10 rounded-lg p-2 hover:bg-slate-700/90 lg:hidden ml-auto ${hamburger && 'bg-slate-700'}`} onClick={() => setHamburger(!hamburger)}>
                                {hamburger ? (
                                    <>
                                        <span className='w-full block h-[2px] bg-slate-200 rotate-45 translate-x-[1px]'></span>
                                        <span className='w-full block h-[2px] bg-slate-200 -rotate-45 -translate-y-[2px]'></span>
                                    </>
                                ) : (
                                    <>
                                        <span className='w-full block h-[2px] bg-slate-200'></span>
                                        <span className='w-full block h-[2px] bg-slate-200 my-2'></span>
                                        <span className='w-full block h-[2px] bg-slate-200'></span>
                                    </>
                                )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
