import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';

import config from '../../website-config';

const SiteNavLogoStyles = css`
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 0px 0;
  color: #fff;
  font-size: 2rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 50px;
  }
`;

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}

const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/HopShot-Logo.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: SiteNavLogoProps) => (
      <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
        {data.logo ? (
          <img src={data.logo.childImageSharp.fixed.src} alt={config.title} />
        ) : (
          config.title
        )}
      </Link>
    )}
  />
);

export default SiteNavLogo;
