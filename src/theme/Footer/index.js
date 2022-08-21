import React from 'react';
import styles from '../../styles/Global.module.scss';
import GitHubLogo from '@site/static/img/icons/GitHub.svg';
import TwitterLogo from '@site/static/img/icons/Twitter.svg';
import LinkedInLogo from '@site/static/img/icons/LinkedIn.svg';
import RSSLogo from '@site/static/img/icons/RSS.svg';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <a href='https://github.com/Jwaegebaert' target='_blank' rel='noreferrer'>
          <GitHubLogo/>
        </a>

        <a href='https://twitter.com/jwaegebaert' target='_blank' rel='noreferrer'>
          <TwitterLogo/>
        </a>

        <a href='https://www.linkedin.com/in/jwaegebaert' target='_blank' rel='noreferrer'>
          <LinkedInLogo/>
        </a>

        <a href='https://jwaegebaert.github.com/rss.xml' target='_blank' rel='noreferrer'>
          <RSSLogo/>
        </a>
      </div>

      <div className={styles.text}>
        <p>
          © {new Date().getFullYear()} 
          <b> Jasey Waegebaert</b> 
          <br/> 
          Built with <a href='https://docusaurus.io/' target='_blank' rel='noreferrer'>Docusaurus</a>
        </p>
      </div>
    </div>
  ); 
}

export default React.memo(Footer);
