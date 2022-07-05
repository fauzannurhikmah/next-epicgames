import InfoPost from "@components/infoPost"

export default function Post() {
    return (
        <article>
            <div className="container px-4 pt-12 mb-8">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/5">
                        <img src="/post/2.jpg" alt="" className="rounded-xl w-full shadow-md" />
                    </div>
                    <div className="w-full lg:w-2/5">
                        <div className="px-5 py-6">
                            <InfoPost category="UI Design" date="22 June, 2022" title="lorem ipsum dolor sit amet consectectur adisipicing mabryr" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis rem harum quo? Ab minus ad, rerum asperiores facilis cupiditate eius aliquid libero saepe veritatis expedita adipisci fugiat quod dicta eligendi voluptatem perferendis quis recusandae?" authorAvatar="/user/hutao.jpg" authorName="Hu Tao" authorJob="Pyro DPS" />
                        </div>

                    </div>
                </div>
            </div>

        </article>
    )
}