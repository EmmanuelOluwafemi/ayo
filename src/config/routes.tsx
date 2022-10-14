import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameOptions, Home } from "../sheets";
import Game from "../sheets/Game";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Game} options={{
                headerShown: false
            }} />
            <Stack.Screen name="GameOptions" component={GameOptions} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

export default Routes