import AddDocumentBtn from "@/components/AddDocumentBtn";
import Header from "@/components/Header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Home = () => {
  const documents = [];

  return (
    <main className="home-container">
      <Header className="sticky left-4 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notificationsss
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {documents.length > 0 ? (
        <div></div>
      ) : (
        <div className="document-list-empty">
          <Image
            src="/assets/icons/doc.svg"
            alt="empty doc"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocumentBtn />
        </div>
      )}
    </main>
  );
};

export default Home;
