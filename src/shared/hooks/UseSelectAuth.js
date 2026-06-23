import { useSelector } from "react-redux";
import {
    selectAuthLoading,
    selectIsAuthenticated,
    selectUser,
} from "../../features/auth/selectors";

export const useSelectUser = () => {
    const user = useSelector(selectUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const loading = useSelector(selectAuthLoading);

    return {
        user,
        isAuthenticated,
        loading,
    };
};