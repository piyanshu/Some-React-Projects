import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import { useSelector } from "react-redux";
import { useThunk } from '../hooks/use-thunk';
import Button from './Button';
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

function UsersList(){
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUsers, isCreatingUser, creatingUserError] = useThunk(addUser);
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUsers();
    };
    let content;
    if(isLoadingUsers){
        content = <Skeleton times={6} className='h-10 w-full'/>
    }
    else if(loadingUsersError){
        content = <div>Error in fetching data...</div>
    }
    else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user}/>
        });
    } 
    return <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            {creatingUserError && 'Error'}
        </div>
        {content}
    </div>
};

export default UsersList;