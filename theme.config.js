const YEAR = new Date().getFullYear()
import Callout from 'nextra-theme-docs/callout'


export default {
  footerText: 'A. Latella 2020 © UX Worldwide',
  titleSuffix: ' – Alessandro P-folio',
  dark: true,
  footerEditOnGitHubLink: false, // will link to the docs repo
  logo: <>
    <h3 style={{ marginTop: '0px' }}>Alessandro Frontend/UX</h3>
  </>,
  footer: (
    <small style={{ display: 'block', marginTop: '2rem' }}>
      <time>{YEAR}</time> © Alessandro Latella.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
