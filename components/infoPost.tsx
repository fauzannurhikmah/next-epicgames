import Link from 'next/link';

export default function infoPost({
    category, date, title, shortDescription, authorAvatar, authorName, authorJob
}: any) {
    return (
        <>
            <div className="space-x-3 text-sm text-violet-600">
                <span className="uppercase">{category}</span> <i>&bull;</i>
                <span>{date}</span>
            </div>
            <h2 className="font-semibold text-3xl mb-6 hover:opacity-80"><Link href="/singlePost"><a>{title}</a></Link></h2>
            <p className="text-slate-400 mb-6">{shortDescription}</p>
            <div className="flex flex-wrap items-center gap-2">
                <img src={authorAvatar} alt="" className="w-14 h-14 rounded-full object-cover" />
                <div>
                    <h4 className="text-lg">{authorName}</h4>
                    <p className="text-slate-500 text-xs -mt-1">{authorJob}</p>
                </div>
            </div>
        </>
    )
}