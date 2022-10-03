import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const cards = [
  {
    title: 'Admin Console',
    icon: 'img/icons/admin-console.svg',
    description: "Thabala Admin Console is the web interface to manage and administrate your services in a web browser.",
    url: 'admin-console/overview',
  },
  {
    title: 'Thabala CLI',
    icon: 'img/icons/cli.svg',
    description: "Thabala Command Line Interface is the tool to manage and administrate your service programmatically.",
    url: 'cli',
  },
  {
    title: 'Services',
    icon: 'img/icons/services.svg',
    description: "Documentation of the supported fully managed services.",
    url: 'services',
  }
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}

function Card({title, icon, description, url }) {
  return (
    <article className={clsx('col col--4')}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={icon} className={styles.cardIcon}></img>
        </div>
        <h2>{title}</h2>
        <div className={styles.cardContainer}>
          <p>{description}</p>
        </div>
        <div class={styles.cardButton}>
          <a href={url} class="button">Get Started</a>
        </div>      
      </div>
    </article>
  );
}

export default function HomepageFeatures() {
    return (
      <div className={styles.quickLinks}>
        <h2 className={styles.cardsTitle}>Quick links</h2>
        <section className={styles.cards}>
            <ul className={styles.grid3col}>
              {cards.map((props, idx) => (
                <Card key={idx} {...props} />
              ))}
            </ul>
        </section>
      </div>
    );
  }
