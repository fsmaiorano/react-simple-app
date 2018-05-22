import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => (
    <div className="post-header">
        <img className="-circle" src={props.post.image} />
        <div>
            <p>{props.post.author}</p>
            <p>{props.post.date}</p>
        </div>
    </div>
);

PostHeader.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string
    }).isRequired,
};

export default PostHeader;