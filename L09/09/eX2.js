import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, SectionList} from 'react-native';

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title:"Vowels", bgcolor:"skyblue",},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title:"Consonants", bgcolor:"khaki"}

];

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
});
const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={[styles.opacityStyle]}>
            <Text style={[styles.headerText, styles.textStyle]}>{item.key}</Text>
        </TouchableOpacity>
    );
};


// Step 5: Add FlatList item to main view
const MyApp = () => {
    return (
        <View style={{marginTop: 30}}>
            <SectionList contentContainerStyle={{padding:10}}
                         sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgcolor}})=>(
                             <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
                         )}/>
        </View>
    );
};

export default MyApp;