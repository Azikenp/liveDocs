import { Composer } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react/suspense";
import React from "react";

const Comments = () => {
  const { threads } = useThreads();
  return (
    <div className="comments-container">
      <Composer className="comments-composer" />

      {threads.map((thread) => (
        <ThreadWrapper key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default Comments;
