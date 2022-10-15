import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameOptions, GameWinnerSheet, Home } from "../sheets";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={GameWinnerSheet} options={{
                headerShown: false
            }} />
            <Stack.Screen name="GameOptions" component={GameOptions} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

export default Routes