import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Dummy credentials for testing
  const dummyCredentials = [
    { email: 'demo@chef.com', password: 'demo123', fullName: 'Demo Chef' },
    { email: 'test@recipe.com', password: 'test123', fullName: 'Test User' },
    { email: 'cook@food.com', password: 'cook123', fullName: 'Master Cook' }
  ];

  const login = (email, password) => {
    // Check against dummy credentials
    const foundUser = dummyCredentials.find(
      cred => cred.email === email && cred.password === password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      setUser({
        email: foundUser.email,
        fullName: foundUser.fullName,
        id: Math.random()
      });
      return { success: true, message: 'Login successful!' };
    }
    return { success: false, message: 'Invalid credentials!' };
  };

  const signup = (email, password, fullName) => {
    // Check if email already exists
    const emailExists = dummyCredentials.some(cred => cred.email === email);
    
    if (emailExists) {
      return { success: false, message: 'Email already registered!' };
    }

    // Add new user to dummy data (in real app, this goes to backend)
    dummyCredentials.push({ email, password, fullName });

    setIsAuthenticated(true);
    setUser({
      email,
      fullName,
      id: Math.random()
    });
    return { success: true, message: 'Account created successfully!' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
