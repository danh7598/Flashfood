import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (storageKey, value) => {
    try {
        await AsyncStorage.setItem(`@${storageKey}`, value);
    } catch (e) {
        console.log("Error store data: ", e);
        // saving error
    }
};

export
    const getData = async (storageKey) => {
        try {
            const jsonValue = await AsyncStorage.getItem(`@${storageKey}`);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log("Error reading data: ", e);
            // error reading value
        }
    };
