import Form from '@/components/Form'
import Header from '@/components/Header'
import PostFeed from '@/components/Post/PostFeed'

export default function Home() {
  return (
    <>
      <Header label='Home' />
      <Form placeholder="What's Happening?" />
      <PostFeed />
    </>
  )
}