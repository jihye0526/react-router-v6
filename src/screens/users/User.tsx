import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

export default function User(){
    const { userId } = useParams();

    return (
        <div>
            <h1>User with it {userId} is name : {users[Number(userId)-1].name}</h1>
            <hr/>
            <Link to="followers">See Followers</Link> {/* <Link to="/followers">라고 쓰면 localhost:3000/followers로 이동함 */}
            <Outlet />
        </div>
    );
}