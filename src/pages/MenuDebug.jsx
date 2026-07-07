import React from "react";
import useMenu from "../context/useMenu";

const MenuDebug = () => {

    const { menu, loading, error } = useMenu();

    if (loading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>{error}</h2>;

    return (

        <pre>

            {JSON.stringify(menu, null, 4)}

        </pre>

    );

};

export default MenuDebug;