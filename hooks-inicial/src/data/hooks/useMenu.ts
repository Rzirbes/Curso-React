import { useContext } from "react";
import ContextMenu from "../context/MenuProvider";

export default function useMenu() {
    const context = useContext(ContextMenu);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
}
