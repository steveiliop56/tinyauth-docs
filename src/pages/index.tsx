import { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";

function Header() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.mainHeader}>
      <div className={styles.gridContainer}>
        <div className={styles.gridLines} />
        <div className={styles.radialFade} />
        <div className={styles.headerContainer}>
          <div>
            <Heading as="h1" className={styles.headerTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.headerSubtitle}>
              Tinyauth is the easiest way to secure your apps with a login
              screen. Forget endless configurations and complex dashboards and
              say hello to a five minute installation.
            </p>
            <div className={styles.quickLinks}>
              <Link
                className={clsx(styles.quickLink, styles.quickLinkPrimary)}
                to="/docs/getting-started"
              >
                Get Started
              </Link>
              <Link
                className={clsx(styles.quickLink, styles.quickLinkSecondary)}
                to="/docs/reference/configuration"
              >
                Configuration
              </Link>
              <Link
                className={clsx(styles.quickLink, styles.quickLinkSecondary)}
                to="https://demo.tinyauth.app"
              >
                Demo
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.browserFrame}>
              <div
                className={clsx(
                  styles.browserButton,
                  styles.browserButtonClose,
                )}
              />
              <div
                className={clsx(
                  styles.browserButton,
                  styles.browserButtonMinimize,
                )}
              />
              <div
                className={clsx(
                  styles.browserButton,
                  styles.browserButtonMaximize,
                )}
              />
            </div>
            <img
              src="/screenshots/tinyauth-dark.png"
              alt="Tinyauth login screen"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.featuresContainer}>
        <Heading as="h1">Features</Heading>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <Heading as="h2" className={styles.featureCardTitle}>
              Simple
            </Heading>
            <p className={styles.featureCardDescription}>
              Tinyauth focuses on simplicity. It is designed to only require
              environment variables for configuration and it is completely
              stateless.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Heading as="h2" className={styles.featureCardTitle}>
              Lightweight
            </Heading>
            <p className={styles.featureCardDescription}>
              Tinyauth ships as a single binary with no dependencies and
              requires practically no resources to run.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Heading as="h2" className={styles.featureCardTitle}>
              OAuth Support
            </Heading>
            <p className={styles.featureCardDescription}>
              With Tinyauth you can easily log in to your apps using your
              favorite OAuth providers.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Tinyauth"
      description="The simplest way to protect your apps with a login screen."
    >
      <Header />
    </Layout>
  );
}
