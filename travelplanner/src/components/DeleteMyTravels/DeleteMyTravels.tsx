import React from "react";
import { deleteTravel } from "@/database";
// Defines the props type for the DeleteMyTravels component.
interface DeleteMyTravelsProps {
    id: number;
    onDelete: (id: number) => void;
}
// DeleteMyTravels is a functional component that provides a button to delete a travel entry.
const DeleteMyTravels: React.FC<DeleteMyTravelsProps> = ({ id, onDelete }) => {
    const handleDelete = async () => {
        await deleteTravel(id);
        onDelete(id);
    };

    return (
        <button className={"deleteBtn"} onClick={handleDelete}>
            Delete
        </button>
    );
};

export default DeleteMyTravels;
