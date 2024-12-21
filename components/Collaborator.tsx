import Image from "next/image";
import React, { useState } from "react";

const Collaborator = ({
  roomId,
  creatorId,
  collaborator,
  email,
  user,
}: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || "viewer");
  const [loading, setLoading] = useState(false);

  const shareDocumentHandler = async (type: string) => {};
  const removeCollaboratorHandler = async (email: string) => {};

  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-2">
        <Image
          src={collaborator.avatar}
          width={36}
          height={36}
          className="size-none rounded-full"
          alt="avatar"
        />
      </div>
    </li>
  );
};

export default Collaborator;
