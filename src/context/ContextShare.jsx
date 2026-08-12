import { createContext, useEffect, useState } from "react";
import { addlikedcarApi, getallcardetailsApi, getlikedcarApi, removelikedcarApi } from "../service/allApi";

export const loginResponseContext = createContext({})
export const editResponseContext = createContext({})
export const carContext = createContext();

function ContextShare({ children }) {
    const [loginResponse, setLoginResponse] = useState(() => {
        const adminData = sessionStorage.getItem('admin');
        const userData = sessionStorage.getItem('user')
        return (adminData || userData) ? true : false;
    })

    const [editResponse, setEditResponse] = useState([])

    const [likedcars, setLikedcars] = useState([]);

    //fetch all liked cars from the api
    const fetchLikedCars = async () => {
        try {
            const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
            const currentUserId = loggedInUser?.id || loggedInUser?._id;

            const result = await getlikedcarApi()
            if (result.status === 200) {
                const userCars = result.data.filter(item => String(item.userId) === String(currentUserId));
                setLikedcars(userCars)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    const currentUserId = loggedInUser?.id || loggedInUser?._id;

    useEffect(() => {
        if (currentUserId) {
            fetchLikedCars();
        } else {
            setLikedcars([]);
        }
    }, [currentUserId])

    // save liked car (if not already liked)
    const saveLikedCar = async (car) => {

        const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
        const currentUserId = loggedInUser?.id || loggedInUser?._id;

        const isAlreadyLiked = likedcars.some((item) => (item.carname || item.name)?.toLowerCase() === (car.carname || car.name)?.toLowerCase());

        if (!isAlreadyLiked) {
            try {
                const { id, ...carWithotId } = car;

                const carWithUserId = { ...carWithotId, userId: currentUserId };

                const result = await addlikedcarApi(carWithUserId);
                if (result.status === 201 || result.status === 200) {
                    setLikedcars((prev) => [...prev, result.data]);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    //remove liked car by id
    const removeLikedCar = async (id) => {
        try {
            const result = await removelikedcarApi(id);
            if (result.status === 200 || result.status === 204) {
                setLikedcars((prev) => prev.filter((item) => item.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
            <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                <carContext.Provider value={{ likedcars, setLikedcars, saveLikedCar, removeLikedCar }}>
                    {children}
                </carContext.Provider>
            </editResponseContext.Provider>
        </loginResponseContext.Provider>
    )
}

export default ContextShare