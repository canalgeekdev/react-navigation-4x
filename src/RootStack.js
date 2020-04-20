import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";

import SplashComponent from "./SplashComponent";
import SignUpComponent from "./SignUpComponent";
import HomeComponent from "./HomeComponent";

const StackNavigator = createStackNavigator ({
    SplashScreen: {
        screen: SplashComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    HomeScreen: {
        screen: HomeComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "Seu Profile",
             
        }
    },
    SignUpScreen: {
        screen: SignUpComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "Novo Usuário"
        }
    }
});

export default createAppContainer(StackNavigator);