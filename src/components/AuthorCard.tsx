import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles/colors';
import { AuthorProfileImage } from '../styles/shared';

const AuthorCardSection = styled.section`
  display: flex;
  align-items: center;
`;

const AuthorCardName = styled.h4`
  margin: 8px 0 2px 0;
  padding: 0;
  font-size: 2rem;

  a {
    color: ${colors.darkgrey};
    font-weight: 700;
  }

  a:hover {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    margin: 0 auto;
  }
`;

const AuthorCardContent = styled.section`
  flex: 1;

  p {
    margin: 0;
    color: ${colors.midgrey};
    line-height: 1.3em;
  }
`;

export interface AuthorCardProps {
  author: any;
}

const AuthorCard: React.FunctionComponent<AuthorCardProps> = ({ author }) => {
  return (
    <AuthorCardSection>
      {/* TODO: default avatar */}
      {/* TODO: author page url */}
      <Link to={`/author/${_.kebabCase(author.id)}/`}>
        <img css={AuthorProfileImage} src={author.avatar.children[0].fixed.src} alt={author.id} />
      </Link>
      <AuthorCardContent>
        <AuthorCardName>
          <Link to={`/author/${_.kebabCase(author.id)}/`}>{author.id}</Link>
        </AuthorCardName>
        {author.bio ? (
          <Link to={`/author/${_.kebabCase(author.id)}/`}>
            <p>{author.bio}</p>
          </Link>
        ) : (
          <p>
            Read <Link to={`/author/${_.kebabCase(author.id)}/`}>more posts</Link> by this author.
          </p>
        )}
      </AuthorCardContent>
    </AuthorCardSection>
  );
};

export default AuthorCard;
