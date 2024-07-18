import React, { createContext, useEffect, useReducer, ReactNode, Reducer } from "react";
import axios from "axios";

// Define notification type
interface Notification {
  id: string;
  message: string;
  // Add other notification properties as needed
}

// Define state type
interface NotificationState {
  notifications: Notification[];
}

// Define action types
type NotificationAction =
  | { type: "LOAD_NOTIFICATIONS"; payload: Notification[] }
  | { type: "DELETE_NOTIFICATION"; payload: Notification[] }
  | { type: "CLEAR_NOTIFICATIONS"; payload: Notification[] }
  | { type: "CREATE_NOTIFICATION"; payload: Notification[] };

// Initial state
const initialState: NotificationState = {
  notifications: [],
};

// Reducer function
const reducer: Reducer<NotificationState, NotificationAction> = (state, action) => {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS":
    case "DELETE_NOTIFICATION":
    case "CLEAR_NOTIFICATIONS":
    case "CREATE_NOTIFICATION":
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};

// Define context type
export interface NotificationContextType {
  notifications: Notification[];
  deleteNotification: (notificationID: string) => void;
  clearNotifications: () => void;
  getNotifications: () => void;
  createNotification: (notification: Notification) => void;
}

// Initial context value
const initialContext: NotificationContextType = {
  notifications: [],
  deleteNotification: () => {},
  clearNotifications: () => {},
  getNotifications: () => {},
  createNotification: () => {},
};

// Create context
const NotificationContext = createContext<NotificationContextType>(initialContext);

// Define props for the provider component
interface NotificationProviderProps {
  children: ReactNode;
}

// Provider component
export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteNotification = async (notificationID: string) => {
    try {
      const res = await axios.post<Notification[]>("/api/notification/delete", { id: notificationID });
      dispatch({ type: "DELETE_NOTIFICATION", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  const clearNotifications = async () => {
    try {
      const res = await axios.post<Notification[]>("/api/notification/delete-all");
      dispatch({ type: "CLEAR_NOTIFICATIONS", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  const getNotifications = async () => {
    try {
      const res = await axios.get<Notification[]>("/api/notification");
      dispatch({ type: "LOAD_NOTIFICATIONS", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  const createNotification = async (notification: Notification) => {
    try {
      const res = await axios.post<Notification[]>("/api/notification/add", { notification });
      dispatch({ type: "CREATE_NOTIFICATION", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        getNotifications,
        deleteNotification,
        clearNotifications,
        createNotification,
        notifications: state.notifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
