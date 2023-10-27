import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '@components/layout'
import CardPost from '@components/cardPost'
import postList from 'utils/posts.json'

const Posts: NextPage = () => {
    const [posts, setPostsList] = useState(postList);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Layout>
            <div className="container">
                {posts.length ? (
                    <>
                        <div className='py-20'>
                            <h1 className='text-4xl font-bold text-center tracking-[4px]'>Posts Title</h1>
                        </div>
                        <div className="lg:grid lg:gap-4 lg:grid-cols-3 ">
                            {posts.map(post => (
                                <div key={post.id} className="w-full mb-4">
                                    <CardPost {...post} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="py-24 mb-20 text-center">
                        <h4 className='text-xl md:text-2xl mb-10'>Search <span className='font-bold'>hasuhasduh</span></h4>
                        <h1 className='text-5xl md:text-8xl text-white mb-4'>Not Found 😪</h1>
                        <div className="w-full md:max-w-md mx-auto">
                            <p className='text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere similique sunt tenetur recusandae assumenda, cupiditate asperiores iusto laboriosam cumque perferendis?</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}
export default Posts
