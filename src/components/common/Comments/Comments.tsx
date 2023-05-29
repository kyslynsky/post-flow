import { CommentsProps } from "./Comments.props";
import styles from "./Comments.module.css";
import cn from "classnames";
import { HTag } from "../HTag";
import { PTag } from "../PTag";
import { useGetCommentsByPostIdQuery } from "../../../redux/posts";

export const Comments = ({
  postId,
  className,
  ...props
}: CommentsProps): JSX.Element => {
  const {
    data: comments = [],
    isError,
    isFetching,
  } = useGetCommentsByPostIdQuery(postId);

  return (
    <div className={cn(className, styles.comments)} {...props}>
      {comments && (
        <>
          <HTag tag="h2" >Comments:</HTag>
          <ul>
            {comments &&
              comments.map(c => (
                <li key={c.id} className={styles.listItem}>
                  <PTag size="m">{c.email}</PTag>
                  <HTag tag="h3">{c.name}</HTag>
                  <PTag size="s">{c.body}</PTag>
                  <hr />
                </li>
              ))}
          </ul>
        </>
      )}
      {isError && <div>Something went wrong</div>}
      {isFetching && <div>Loading...</div>}
    </div>
  );
};
