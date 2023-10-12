import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '../components/Button'
import styles from "../pages/App.module.css"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className={styles.title}>Hello Next.js 👋</h1>
    <Button text={'Continue'} />
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
