import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
    nameOfMyUser: string;
}

export default function Followers(){
    const {nameOfMyUser} = useOutletContext<IFollowersContext>();

    return (
        <>
            <h2>{nameOfMyUser}의 follwers</h2>
        </>
    );
}