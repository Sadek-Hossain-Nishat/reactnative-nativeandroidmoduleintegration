import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import NativePdfReader from "./NativePdfReader";
import SplashScreen from "./SplashScreen";



const MainScreen = () => {

    const [start, setStart] = useState(true);

    useEffect(() => {
        setTimeout(() => {

            setStart(false)

        }, 5000);
    }, []);

    return (
        <View>

            {start?<SplashScreen/>:<NativePdfReader/>}

        </View>
    );
};

export default MainScreen;
