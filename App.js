import { StyleSheet, Text, View, Button , TextInput } from'react-native';
import { SafeAreaView } from'react-native-safe-area-context';
export default function App() {

const [enteredTaskText, setEnteredTaskText] = useState('');
const [tasks, setTasks] = useState([]);

const taskInputHandler = (enteredText) => {

 
setEnteredTaskText(enteredText);
};

function addTaskHandler() {

    if (enteredTaskText.trim().length === 0) {
        return;
    }
    setTasks((currentTasks) => [
        ...currentTasks,
        { id: Math.random().toString(), text: enteredTaskText }
    ]);
    setEnteredTaskText('');

    
}
    


return (
<SafeAreaView style={styles.appContainer}>
<View style={styles.contentContainer}>
<Text style={styles.title}>Yapılacaklar Listem</Text>
<View style={styles.inputContainer}>
<TextInput
style={styles.textInput}
placeholder="Yeni bir görev ekle..."
onChangeText={taskInputHandler} // State işleyiciye bağlan
value={enteredTaskText} // Değeri state'e bağla
/>
</View>
<Button title="Ekle" onPress={addTaskHandler} />

{/* Liste alanı buraya gelecek */}
</View>
</SafeAreaView>
);
}
const styles= StyleSheet.create({
appContainer: {
flex: 1,
backgroundColor: '#f0f2f5'
},
contentContainer: {
flex: 1,
padding: 20,
paddingTop: 40,
},
title: {
fontSize: 24,
fontWeight: 'bold'
,
marginBottom: 20,
textAlign: 'center'
,},

inputContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
borderBottomWidth: 1,
borderColor: '#ccc',
paddingBottom: 10,
},
textInput: {
flex: 1, // Mümkün olduğunca çok yer kapla
borderWidth: 1,
borderColor: '#ccc'
,
padding: 10,
borderRadius: 6,
marginRight: 10,
fontSize: 16,
},
});