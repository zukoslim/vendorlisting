// import Image from "next/image";
import { getServerSession } from "next-auth";

export default  async function Home() {
  const session = await getServerSession();
   console.log("Session:", session);


  return (
    <>
    getServerSession Result 
     {
      session?.user?.name ? (
        <div className="text-blue-500">You are signed in as {session.user?.name}</div>
      ) : (
        <div className="text-red-500">You are not signed in</div>
      )
     }
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>zuko vendor listing</h2>
    </div>


    </>
  );
}
