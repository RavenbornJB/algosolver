import { LikeButton } from '@lyket/react';

const FieldProblemLikes = (props) => {
    return <LikeButton
        id={props.id}
        namespace="post"
    />;
}

export default FieldProblemLikes;