import styles from './page.module.css'
import NotionPosts from '@/components/NotionPosts'
import Header from '@/components/Header';

export default function Home() {
  return <>
    <Header />
    <main className={styles.mainWrapper}>
      <NotionPosts />
    </main>
  </>
}
