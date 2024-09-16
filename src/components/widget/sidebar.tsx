import SidebarContent from "./sidebar-content";

// This function simulates an API call to get user data
// It runs on the server
async function getUserData() {
    // Sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 10));
    return {
        isAdmin: true,
    }
}

export default async function Sidebar() {
    const { isAdmin } = await getUserData();
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <SidebarContent isAdmin={isAdmin} />
            </nav>
        </aside>
    )
}