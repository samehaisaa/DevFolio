import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from './components/ErrorBoundary';

// Screen imports
import HomeScreen from './screens/HomeScreen';
import DiplomasScreen from './screens/DiplomasScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import DiplomaDetailScreen from './screens/DiplomaDetailScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';

// Theme constants
const THEME = {
  colors: {
    primary: '#2E86C1',
    white: '#FFFFFF',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

const defaultScreenOptions = {
  headerStyle: { 
    backgroundColor: THEME.colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: THEME.colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProjectStack() {
  return (
    <ErrorBoundary>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen 
          name="ProjectsList" 
          component={ProjectsScreen} 
          options={{ 
            title: 'Mes Projets',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="ProjectDetail" 
          component={ProjectDetailScreen} 
          options={({ route }) => ({ 
            title: route.params?.project?.title || 'Projet',
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </ErrorBoundary>
  );
}