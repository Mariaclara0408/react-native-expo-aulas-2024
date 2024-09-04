import { Children } from "react";
import { FontProvier } from ".";
import { AuthProvider } from "./auth";

export function AppProvier({ children }) {
    return <FontProvier><AuthProvider>{Children}</AuthProvider></FontProvier>
}