'use client'

import styles from './NotionPosts.module.css';
import { useState, useEffect } from 'react';
import { getNotionPublicPosts } from '@/service/notion-posts';

export default function NotionPosts() {

  const [notionPublicPosts, setNotionPublicPosts] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    getNotionPublicPosts().then(setNotionPublicPosts);
  }, []);

  return <div className={styles.container}>
    {notionPublicPosts && notionPublicPosts.map((post, index) => {
      return <a key={index} href={post.url} target='_blank' className={styles.link}>
        <div className={styles.postCard}>
          <div><img src={post.coverImageUrl} alt='empty image' /></div>
          <div className={styles.info}>
            <h1 className={styles.title}>{post.emoji} {post.title}</h1>
            <div>
              <p className={styles.time}>작성일자 {post.createdTime}</p>
              <ul className={styles.topics}>
                <li className={styles.mainTopic}>{post.topic}</li>
                {post.subTopics?.map((sub: string) => <li key={sub} className={styles.subTopic}>{sub}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </a>
    })}
  </div>
}
