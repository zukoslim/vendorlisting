import { redirect } from "next/navigation";
import { getServerSession } from "next-auth"; 

export default  async function Dashboard() {
  const session = await getServerSession();
  console.log("Session: dashboard", session);
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-amber-300 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Dashboard | you are signed in</h2>
    </div>
  );
}