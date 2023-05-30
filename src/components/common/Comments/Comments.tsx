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
          <HTag tag="h2">Comments:</HTag>
          <hr className={styles.divider} />
          <ul>
            {comments &&
              comments.map(c => (
                <li key={c.id} className={styles.listItem}>
                  <HTag tag="h3">{c.name}</HTag>
                  <PTag
                    className={styles.comment}
                    size="s"
                    texttransform="Capitalize"
                  >
                    {c.body}
                  </PTag>
                  <a className={styles.userEmail} href={`mailto:${c.email}`}>{c.email}</a>
                  <hr className={styles.divider} />
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
