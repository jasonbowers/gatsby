import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { lighten, darken } from 'polished';

import { colors } from '../styles/colors';

const PostFullFooterRightDiv = styled.div`
  flex-shrink: 0;
  margin-left: 20px;
`;

const AuthorCardButton = css`
  display: block;
  padding: 9px 16px;
  /* border: color(var(--midgrey) l(+20%)) 1px solid; */
  border: ${lighten('0.2', colors.yellow)} 2px solid;
  color: ${colors.yellow};
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 500;
  border-radius: 20px;
  transition: all ease 0.2s;

  :hover {
    border-color: ${colors.yellow};
    color: ${darken('0.15', colors.yellow)};
    text-decoration: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export interface PostFullFooterRightProps {
  authorId: string;
}

const PostFullFooterRight: React.FunctionComponent<PostFullFooterRightProps> = props => (
  <PostFullFooterRightDiv>
    <Link css={AuthorCardButton} to={`/author/${_.kebabCase(props.authorId)}/`}>
      Read More
    </Link>
  </PostFullFooterRightDiv>
);

export default PostFullFooterRight;
