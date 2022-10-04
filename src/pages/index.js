import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeCards from '@site/src/components/HomeCards';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
    <div className="container">
      <img className={styles.homeLogo} src="img/thabala-long-blue.svg" />
      <h1 className={styles.heroTitle}>Thabala Documentation</h1>
    </div>
    <div class={styles.bannerButton}>
      <a href="admin-console" class="button">Get Started</a>
    </div>
  </header>
  )
}

export default function Home() {
  return (
    <Layout title="Hello" description="Hello React Page">
        <HomepageHeader />
        <main>
          <HomeCards />
        </main>
    </Layout>
  );
}