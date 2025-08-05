'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost/api/posts')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTPエラー: ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        console.log('取得データ:', data)
        setPosts(data)
      })
      .catch(err => {
        console.error('Fetch error:', err)
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <h1>Posts</h1>

      {error && (
        <p style={{ color: 'red' }}>
          データ取得エラー: {error}
        </p>
      )}

      {posts.length === 0 && !error && (
        <p>読み込み中...</p>
      )}

      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
