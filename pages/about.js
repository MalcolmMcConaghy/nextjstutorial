import Head from 'next/head'
import { Fragment } from "react"

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales neque nisl, at vulputate nulla placerat ac. Fusce eros nulla, semper ut pulvinar ac, dapibus volutpat turpis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales neque nisl, at vulputate nulla placerat ac. Fusce eros nulla, semper ut pulvinar ac, dapibus volutpat turpis.</p>
      </div>
    </Fragment>
  );
}
 
export default About;