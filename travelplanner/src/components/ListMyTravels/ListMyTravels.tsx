import React from "react";
import { useCookies } from "react-cookie";
import { getAllTravels } from "@/database";
import DeleteMyTravels from "../DeleteMyTravels/DeleteMyTravels";
import UserForm from "../UserForm/UserForm";
import { useState } from "react";

export default function ListMyTravels() {
    // cookie
    const [cookies, setCookie] = useCookies(["user"]);

    // useStates
    const [travels, setTravels] = React.useState<any[]>([]);
    const [Deletemessage, setShowDeleteMessage] = useState("");

    // Handles show form if user is not present
    React.useEffect(() => {
        if (cookies.user) {
            getAllTravels().then((allTravels) => {
                const userTravels = allTravels.filter(
                    (travel) => travel.user?.email === cookies.user.email
                );
                setTravels(userTravels);
            });
        }
    }, [cookies.user]);
    //handles delete travel
    const handleDelete = (id: number) => {
        setTravels(travels.filter((travel) => travel.id !== id));
        setShowDeleteMessage("Travel Deleted");
        setTimeout(() => {
            setShowDeleteMessage("");
        }, 3000);
    };
    // handles user submit
    const handleUserSubmit = (user: { name: string; email: string }) => {
        //store user info in cookies
        setCookie("user", user, { path: "/" });
    };

    // rendering the user interface.
    return (
        <div>
            <div className="planned-container">
                <h1>My Planned Travels</h1>
                <h2>Traveler: {cookies.user?.name} </h2>
                <h2>Email: {cookies.user?.email}</h2>
                <h2>{Deletemessage}</h2>
            </div>

            {!cookies.user && <UserForm onUserSubmit={handleUserSubmit} />}
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
