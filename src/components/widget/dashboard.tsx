import DashboardContent from "./dashboard-content";

// This function simulates an API call to get user data
// It runs on the server
async function getUserData() {
    // Sleep for 5 second cause our database is playing a prank on us
    await new Promise((resolve) => setTimeout(resolve, 5000));
    
    // Return dummy data
    return {
        pranks: 1,
        victims: 1,
    }
}

export default async function Dashboard() {
    const { pranks, victims } = await getUserData();
    return (
        <DashboardContent pranks={pranks} victims={victims} />
    )
}