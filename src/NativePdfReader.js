import React, {useEffect} from 'react';
import {NativeModules, View} from "react-native";
import * as DocumentPicker from "react-native-document-picker";

const NativePdfReader = () => {


    const {PdfNativeModule: {sendLink}} = NativeModules


    useEffect(() => {


        selectOneFile().then(r => console.log("success"))


    }, []);

    const selectOneFile = async () => {
        // To Select File
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.pdf],
                // There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            if (res) {
                let uriarray = res.map((file, index) => file.uri);
                let uri = uriarray[0]


                sendLink(uri)


            }
        } catch (err) {
            // Handling Exception
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Canceled');
            } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };


    return (
        <View>

        </View>
    );
};

export default NativePdfReader;
