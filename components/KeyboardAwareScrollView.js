import { ScrollView ,KeyboardAvoidingView} from "react-native"

export default function KeyboardAwareScrollView ({children}) {
    return(
        <ScrollView style={{flex:1
        }}
        contentContainerStyle={{ flexGrow: 1}}
        >
            <KeyboardAvoidingView
            style={{flex:1, flexGrow:1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {children}
    </KeyboardAvoidingView>
    </ScrollView>
    )
}