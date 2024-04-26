import React from "react";
import { deleteTravel } from "@/database";

interface DeleteMyTravelsProps {
    id: number;
    onDelete: (id: number) => void;
}

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
