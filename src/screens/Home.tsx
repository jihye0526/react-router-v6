import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

export default function Home(){
    const [readSearchParams, setSearchParams] = useSearchParams();
    setTimeout(() => {
        setSearchParams({
            day: "today",
            tomorrow: "2023-01-28"
        });
    }, 3000);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}