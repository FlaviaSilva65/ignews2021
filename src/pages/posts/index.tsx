import Head from "next/head";
import styles from "./styles.module.scss";
// import { PrismicRichText } from '@prismicio/react'

export default function Posts() {
  return (
    <>
      <Head>
      
{/* <PrismicRichText field={slice.primary.title} /> */}
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Vivemos em um mundo digital que demanda cada vez mais por interação e experiências personalizadas de conteúdo. Inclusive, 
              as agências parceiras da Rock Content que já têm conteúdos interativos em seu portfólio de serviços relatam um aumento nas 
              taxas de conversão e maior engajamento dos leads.</p>

          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Vivemos em um mundo digital que demanda cada vez mais por interação e experiências personalizadas de conteúdo. Inclusive, 
              as agências parceiras da Rock Content que já têm conteúdos interativos em seu portfólio de serviços relatam um aumento nas 
              taxas de conversão e maior engajamento dos leads.</p>

          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Vivemos em um mundo digital que demanda cada vez mais por interação e experiências personalizadas de conteúdo. Inclusive, 
              as agências parceiras da Rock Content que já têm conteúdos interativos em seu portfólio de serviços relatam um aumento nas 
              taxas de conversão e maior engajamento dos leads.</p>

          </a>
        </div>
      </main>
    </>
  );
}
