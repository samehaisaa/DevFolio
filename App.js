import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Imports des écrans
import HomeScreen from './screens/HomeScreen';
import DiplomasScreen from './screens/DiplomasScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import DiplomaDetailScreen from './screens/DiplomaDetailScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navigation Stack pour les Projets
function ProjectStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2E86C1' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen 
        name="ProjectsList" 
        component={ProjectsScreen} 
        options={{ title: 'Mes Projets' }}
      />
      <Stack.Screen 
        name="ProjectDetail" 
        component={ProjectDetailScreen} 
        options={({ route }) => ({ title: route.params.project.title })}
      />
    </Stack.Navigator>
  );
}

// Navigation Stack pour les Diplômes
function DiplomaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2E86C1' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen 
        name="DiplomasList" 
        component={DiplomasScreen} 
        options={{ title: 'Mes Diplômes' }}
      />
      <Stack.Screen 
        name="DiplomaDetail" 
        component={DiplomaDetailScreen} 
        options={({ route }) => ({ title: route.params.diploma.title })}
      />
    </Stack.Navigator>
  );
}

// Navigation par onglets
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profil') iconName = 'md-person';
          else if (route.name === 'Formation') iconName = 'md-school';
          else if (route.name === 'Projets') iconName = 'md-folder';
          else if (route.name === 'Contact') iconName = 'md-mail';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2E86C1',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profil" component={HomeScreen} />
      <Tab.Screen name="Formation" component={DiplomaStack} />
      <Tab.Screen name="Projets" component={ProjectStack} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}