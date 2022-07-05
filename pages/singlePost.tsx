import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '@components/layout'

const singlePost: NextPage = () => {
    return (
        <Layout>
            <div className="container">
                <div className="w-full md:w-2/3 mx-auto py-20">
                    <div className="space-x-3 text-sm text-violet-600 text-center">
                        <span className="uppercase">Software Engineering</span> <i>&bull;</i>
                        <span>22 july, 2022</span>
                    </div>
                    <h2 className="font-semibold text-4xl mb-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                        <img src='/user/hu-tao.png' alt="" className="w-14 h-14 rounded-full object-cover" />
                        <div>
                            <h4 className="text-lg">Hu Tao</h4>
                            <p className="text-slate-500 text-xs -mt-1">Pyro Main DPS</p>
                        </div>
                    </div>
                    <img src="/post/2.jpg" alt="" className='w-full rounded-lg mb-10' />
                    <div className="text-slate-500 space-y-5">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quia, sit consequuntur quaerat deserunt impedit! Nulla consequatur officia quibusdam quidem id dolores esse velit sed, obcaecati laudantium, possimus a quam?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem et cum adipisci, nulla ipsum itaque ipsam! Delectus dolor placeat repudiandae cum ducimus vel id, autem harum nihil illum omnis! Asperiores temporibus quos eaque tempore esse. Eius vitae cupiditate laudantium possimus obcaecati. Animi velit ratione, ipsa, nisi sunt provident repudiandae amet quia cupiditate a excepturi voluptas expedita consequatur nihil. Nihil atque corrupti maxime hic ratione quas cumque magnam quisquam eligendi, sunt velit, vitae fugiat minima! Quo dolor molestias quos suscipit fuga. Ad deserunt quae nam iste minus, culpa veritatis incidunt, perferendis iusto unde libero dolores ipsum ullam neque atque tempora.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit tempora repellat adipisci reprehenderit corrupti, porro voluptas, molestias mollitia aliquid reiciendis distinctio dicta, vel hic maxime laudantium eveniet illo obcaecati ea minus veritatis perferendis. Modi quis ipsum quo fugiat nobis at ex doloremque deserunt optio corrupti quam ea, assumenda nostrum, similique non consequuntur voluptas possimus officiis sit facere dolorem dolor odio dolorum. Suscipit molestias enim quidem ut debitis.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default singlePost
