import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from '../styles/Global.module.scss';

function Header() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Jasey Waegebaert</h1>
        <p className="hero__subtitle">Microsoft <span className={styles.span365}><span>365</span><span>365</span><span>365</span><span>365</span></span> Consultant</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="About Jasey Waegebaert"
      description="About Jasey Waegebaert">
      <Header />

      <section className={styles.curved}>
        <h1>Microsoft MVP</h1>  
        <h2>Based in Belgium</h2>   
      </section>

      <div>          
        <p className={styles.intro}>
          I've always been quite passionate about technology and sports. Personally, since I started my career within the Microsoft 365 world, I have just grown more and more passionate about the possibilities provided. Primarily through the community that regularly shares their knowledge and tools with others. This has been such a help for my onboarding and continuous learning within Microsoft 365 and now I want to do the same for others. I love to share the knowledge that I have gained over the years with others. <br/><br/><b>Sharing is Caring!</b>
        </p>
      </div>
      {/* <div className={styles.content}>
        <div className={styles.flexBox}>
          <div className={styles.imageBox}>
            <img src='img/aboutMe/profile.png'/>

            <div className={styles.speechbubble}>
              <p>
                Microsoft 365 Consultant, I am. Living in Belgium, I do.
              </p>
            </div>

          </div>
          
          <p className={styles.intro}>
            I've always been quite passionate about technology and sports. Personally, since I started my career within the Microsoft 365 world, I have just grown more and more passionate about the possibilities provided. Primarily through the community that regularly shares their knowledge and tools with others. This has been such a help for my onboarding and continuous learning within Microsoft 365 and now I want to do the same for others. I love to share the knowledge that I have gained over the years with others. <br/><br/><b>Sharing is Caring!</b>
          </p>
        </div>
      </div> */}
    </Layout>
  );
}
