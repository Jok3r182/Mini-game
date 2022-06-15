import { StyleSheet, Text, Platform } from "react-native"

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}   

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.OS === 'android'? 2 : 0,
        borderWidth: Platform.select({ios: 0, android: 2}), //select 0 for IOS, 2 for android or create file title.android.jsx and title.ios.jsx and import title file with this option file will be chosen by device OS
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%'
    }
})

export default Title