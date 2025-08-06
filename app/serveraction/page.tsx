import { getServerSession } from "next-auth";
import WhoAmIButton from "./whoamibutton";

export default function ServerActionPage() {
    const whoAMI = async () => {
        "use server";
        const session = await getServerSession();
        return session?.user?.name || "user is not logged in";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Who Am I</h1>
                <p className="text-gray-500">Click the button below to identify the current user session.</p>
                <WhoAmIButton whoAMIAction={whoAMI} />
            </div>
        </div>
    );
}
