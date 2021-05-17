import { LikeButton } from '@lyket/react';

const FieldProblemLikes = (id, namespace="post") => {
    return (<LikeButton
        id={id}
        namespace={namespace}
    />);
}

export default FieldProblemLikes;