import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getCurrentUser } from "./features/auth/authThunk";
import AppRoutes from "./routes/router";
import { selectUser } from "./features/auth/selectors";
import socketService from './services/websocket/socket';

function App() {
    const dispatch = useDispatch();
    const [bootstrapping, setBootstrapping] = useState(true);
    const user = useSelector(selectUser);

    useEffect(() => {
        let isMounted = true;

        const bootstrapAuth = async () => {
            try {
                await dispatch(getCurrentUser());

            } finally {
                if (isMounted) {
                    setBootstrapping(false);
                }
            }
        };

        bootstrapAuth();

        return () => {
            isMounted = false;
        };
    }, [dispatch]);

    useEffect(() =>{

      socketService.connect(user?.id);

    }, [user]);

    if (bootstrapping) {
        return (
            <div className="grid min-h-screen place-items-center bg-slate-950 text-white">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    Loading...
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
