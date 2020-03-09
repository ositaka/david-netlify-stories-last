import React from 'react'
import Layout from '../../components/Layout'
import Fade from 'react-reveal/Fade'

export default () => (
  <Layout>
    <section className="thank-you">
			<Fade bottom cascade>
        <h1>Thank you!</h1>
        <a href="/" title="Go back to the Homepage">GO BACK</a>
      </Fade>
    </section>
  </Layout>
)
