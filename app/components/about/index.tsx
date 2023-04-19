export const metadata = {
  title: "About",
  description: "About this website.",
  alternates: {
    canonical: "https://regexyl.com/about",
  },
};

const About = () => {
  return (
    <article>
      <p>
        Hi there! I&apos;m a front end engineer at{" "}
        <a href="https://bebop.xyz">Bebop</a>, based in the sunny little island
        of Singapore.
      </p>
      <p>
        I&apos;ve done a few internships before at{" "}
        <a href="https://meta.com">Meta</a> (2022),{" "}
        <a href="https://grab.com">Grab</a> (2021) and{" "}
        <a href="https://mask.io/">Mask Network</a> (2021), but I&apos;m a
        full-fledged noob in many areas. This blog is to document what I&apos;ve
        learned and things I&apos;m excited to share about. Particularly web
        performance, improving developer tooling and front-endy things in
        general.
      </p>
      <p>
        I&apos;m on <a href="https://twitter.com/regexyl">Twitter</a>,{" "}
        <a href="https://github.com/regexyl">GitHub</a> and{" "}
        <a href="https://www.linkedin.com/in/regina-liu/">LinkedIn</a>. DMs
        always open!
      </p>
    </article>
  );
};

export default About;
