import React from "react";
import {View, Text, Image} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, icon_name, icon_color, picture}) => {
    return (
        <View>
            <Text style={{fontSize: 20, fontFamily: 'serif', color: icon_color, textTransform: 'uppercase'}}>
                <FontAwesome6 name={icon_name} size={20} color={icon_color} /> {name}
            </Text>
            <Text style={{color: icon_color}}>
                {description}
            </Text>
            <Image source={picture}
                   style={{width: 412, height: 300}}
            />
            <Text></Text>
        </View>
    );
};

export default Boat;