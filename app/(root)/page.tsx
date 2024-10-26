import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <ClerkProvider>
        <UserButton />
      </ClerkProvider>
    </main>
  );
}
