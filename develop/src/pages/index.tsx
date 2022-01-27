import type { NextPage } from 'next'
import Head from 'next/head'

import { css } from '@emotion/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>next.js / react-three-fiber with typescript</title>
        <meta
          name="description"
          content="next.js / react-three-fiber with typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={style.wrap}>
        <h1 css={style.title}>next.js / react-three-fiber with typescript</h1>
      </main>
    </div>
  )
}

const style = {
  wrap: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  title: css`
    font-size: 3.2rem;
  `,
}

export default Home
