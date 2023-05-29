import { ContactFormProps } from "./AddPostForm.props";
import styles from "./AddPostForm.module.css";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { Button } from "../Button";
import { useAddPostMutation } from "../../../redux/posts";

export interface IFormData {
  title: string;
  body: string;
}

export const AddPostForm = ({
  setOpen,
  className,
  ...props
}: ContactFormProps): JSX.Element => {
  const [addPost, { isLoading }] = useAddPostMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    clearErrors,
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    try {
      await addPost({ userId: v4(), data });
      reset();
      setOpen(false);
      toast(`Thank you! Your post will be moderated before publishing`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        role: "alert",
      });
    } catch (error) {
      toast(`${error}`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        role: "alert",
      });
    }
  };

  return (
    <form
      name="Create blog post"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
      className={cn(styles.form, className)}
    >
      <input
        className={cn(styles.input, {
          [styles.errors]: !watch("title"),
        })}
        type="text"
        placeholder="Specify the post title"
        aria-label="Post title"
        aria-invalid={errors.title ? "true" : "false"}
        role="alert"
        {...register("title", {
          required: "Title is required",
        })}
      />
      <div className={styles.errorMsg}>{errors.title?.message}</div>

      <textarea
        className={cn(styles.textarea, {
          [styles.errors]: !watch("body"),
        })}
        placeholder="What this post is about?"
        aria-label="Post text"
        aria-invalid={errors.body ? "true" : "false"}
        role="alert"
        {...register("body", {
          required: "Text is required",
        })}
      />
      <div className={styles.errorMsg}>{errors.body?.message}</div>

      <Button
        onClick={() => clearErrors()}
        type="submit"
        aria-label="Send"
        appearence="primary"
        className={styles.submitBtn}
      >
        Send
      </Button>
      {isLoading && <div>Loading...</div>}
    </form>
  );
};
