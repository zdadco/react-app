import React from "react";
import preloader from '../../../asserts/preloader.svg';


let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='Загрузка пользователей'/>
        </div>
    );
};

export default Preloader;