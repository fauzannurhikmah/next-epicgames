import InfoPost from "@components/infoPost";

export default function cardPost({ thumbnail, ...infoPost }: any) {
    return (
        <article>
            <img src={thumbnail} alt="" className="w-full rounded-lg mb-4" />
            <div className="px-3">
                <InfoPost  {...infoPost} />
            </div>

        </article>
    )
}