import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Posts = ({ posts }) => (
    <Fragment>
        {
            posts && posts.map(post => (
                <div className="post" key={post.id}>
                    <PostHeader post={post} />
                    <p>{post.content}</p>
                </div>
            ))
        }
    </Fragment>
)

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            content: PropTypes.string,
        }).isRequired,
    )
};

export default Posts;