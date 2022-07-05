import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '@components/layout'
import FeaturePost from '@components/feature'
import CardPost from '@components/cardPost'
import postList from 'utils/posts.json'

const Home: NextPage = () => {
  const [posts, setposts] = useState(postList);
  return (
    <Layout>
      <FeaturePost />
      <div className="container">
        <div className="lg:grid lg:gap-4 lg:grid-cols-3 ">
          {posts.map(post => (
            <div key={post.id} className="w-full mb-4">
              <CardPost {...post} />
            </div>
          ))}
        </div>

      </div>
    </Layout>
  )
}

export default Home
