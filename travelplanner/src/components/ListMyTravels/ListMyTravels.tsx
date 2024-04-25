import React from "react";
import { useCookies } from "react-cookie";
import { getAllTravels } from "@/database";
import DeleteMyTravels from "../DeleteMyTravels/DeleteMyTravels";

export default function ListMyTravels() {
    // cookie
    const [cookies] = useCookies(["user"]);

    // useStates
    const [travels, setTravels] = React.useState<any[]>([]);

    // Handles show form if user is not present
    React.useEffect(() => {
        if (cookies.user) {
            getAllTravels()
                .then((allTravels) => {
                    console.log("All travels data:", allTravels);
                    const userTravels = allTravels.filter(
                        (travel) => travel.user?.email === cookies.user.email
                    );
                    setTravels(userTravels);
                })
                .catch((error) => {
                    console.error("Error loading travels:", error);
                });
        }
    }, [cookies.user]);

    const handleDelete = (id: number) => {
        setTravels(travels.filter((travel) => travel.id !== id));
        console.log("delete", id);
    };

    return (
        <div>
            <h1>My Travels</h1>
            <ul>
                {travels.map((travel) => (
                    <li key={travel.id}>
                        <h2>{travel.city}</h2>
                        <p>
                            {travel.dateRange.start.toDateString()} -{" "}
                            {travel.dateRange.end.toDateString()}
                        </p>
                        <p>{travel.activity.join(", ")}</p>
                        <p>{travel.nights} nights</p>
                        <p>{travel.notes}</p>
                        <DeleteMyTravels id={travel.id} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
