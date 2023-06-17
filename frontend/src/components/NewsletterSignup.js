import { useEffect, useRef } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
function NewsletterSignup() {
  // const data = useActionData();
  const inputRef = useRef();

  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      inputRef.current.value = ""    }
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        ref={inputRef}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
