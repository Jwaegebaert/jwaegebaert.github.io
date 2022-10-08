import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Stack } from 'office-ui-fabric-react';
import styles from '../styles/Global.module.scss';

function Header() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>Jasey Waegebaert</h1>
        <p className='hero__subtitle'>Microsoft <span className={styles.span365}><span>365</span><span>365</span><span>365</span><span>365</span></span> Consultant</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='About Jasey Waegebaert'
      description='About Jasey Waegebaert'>
      <Header />

      <Stack tokens={{ childrenGap: '25px' }} horizontalAlign='center' className={styles.aboutMe}>
        <h1>👋 Hi from <strong>Belgium</strong>!</h1>

        <Stack horizontal horizontalAlign='space-evenly' verticalAlign='center' tokens={{ childrenGap: '50px' }} className={styles.intro}>
          <p>
            I've always been quite passionate about technology and sports. Personally, since I started my career within the Microsoft 365 world, I have just grown more and more passionate about the possibilities provided. Primarily through the community that regularly shares their knowledge and tools with others. This has been such a help for my onboarding and continuous learning within Microsoft 365 and now I want to do the same for others. I love to share the knowledge that I have gained over the years with others. 
            <br/><br/><strong>Sharing is Caring</strong>!
          </p>

          <img src='img/aboutMe/profile.png' alt='Face of Jasey'/>
        </Stack>

      </Stack>  
      
      <div className={styles.skewedTop}/>

      <Stack horizontal verticalAlign='center' horizontalAlign='center' className={styles.headings} tokens={{ childrenGap: '25px' }}>
        <a href='https://mvp.microsoft.com/en-us/PublicProfile/5004921?fullName=Jasey%20Waegebaert' target='_blank'>
          <img src='img/aboutMe/MVP_badge.png' alt='MVP badge'/>
        </a>

        <div>
          <h1>Microsoft MVP</h1>  
          <h2>M365 Development</h2>  
        </div>
      </Stack>

      <div className={styles.skewedBottom}/>
    </Layout>
  );
}
