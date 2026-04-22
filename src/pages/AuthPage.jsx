import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const AuthPage = () => {
  // Keep an explicit runtime reference so eslint's no-unused-vars
  // doesn't falsely flag `motion` when used only in JSX tags.
  void motion;
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let result;
      if (isLogin) {
        result = login(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match!');
          setIsLoading(false);
          return;
        }
        result = signup(formData.email, formData.password, formData.fullName);
      }

      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          navigate('/');
        }, 500);
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const toggleVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.75), rgba(88, 28, 135, 0.7)), url('https://images.splitshire.com/full/A-Simple-Recipes-Website-Background_1TrQY.png')",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-md">
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-2xl shadow-2xl p-8 md:p-10"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mb-3"
            >
              <ChefHat className="w-12 h-12 text-purple-400" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Recipe Maker
            </h1>
            <p className="text-gray-100 text-sm mt-2">
              {isLogin ? 'Welcome back, chef!' : 'Join our culinary community!'}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            key={isLogin ? 'login' : 'signup'}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Full Name Input (Signup only) */}
            {!isLogin && (
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                className="relative group"
              >
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-purple-400 group-focus-within:text-pink-400 transition-colors" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/40 rounded-lg focus:border-pink-400 focus:bg-black/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-200"
                  required={!isLogin}
                />
              </motion.div>
            )}

            {/* Email Input */}
            <motion.div
              custom={!isLogin ? 1 : 0}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-purple-400 group-focus-within:text-pink-400 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/40 rounded-lg focus:border-pink-400 focus:bg-black/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-200"
                required
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              custom={!isLogin ? 2 : 1}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-purple-400 group-focus-within:text-pink-400 transition-colors" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 bg-black/30 border border-white/40 rounded-lg focus:border-pink-400 focus:bg-black/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-200 hover:text-pink-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Confirm Password Input (Signup only) */}
            {!isLogin && (
              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                className="relative group"
              >
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-purple-400 group-focus-within:text-pink-400 transition-colors" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="w-full pl-12 pr-12 py-3 bg-black/30 border border-white/40 rounded-lg focus:border-pink-400 focus:bg-black/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-200"
                  required={!isLogin}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-200 hover:text-pink-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </motion.div>
            )}

            {/* Forgot Password Link (Login only) */}
            {isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-end"
              >
                <a href="#" className="text-sm text-purple-200 hover:text-pink-200 transition-colors">
                  Forgot Password?
                </a>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-transparent border-t-white rounded-full"
                />
              ) : (
                <>
                  {isLogin ? 'Log In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 my-6"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white opacity-20" />
              <span className="text-xs text-gray-200">OR</span>
              <div className="flex-1 h-px bg-gradient-to-r from-white to-transparent opacity-20" />
            </motion.div>

            {/* Social Buttons */}
            <div className="flex gap-3">
              {['Google', 'GitHub'].map((platform, idx) => (
                <motion.button
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex-1 py-2 px-4 bg-white/15 border border-white/30 rounded-lg hover:bg-white/25 transition-all duration-300 text-sm text-gray-100 hover:text-white"
                >
                  {platform}
                </motion.button>
              ))}
            </div>
          </motion.form>

          {/* Toggle Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-6 border-t border-white border-opacity-10 text-center"
          >
            <p className="text-gray-100 text-sm">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <motion.button
                variants={toggleVariants}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({ email: '', password: '', confirmPassword: '', fullName: '' });
                }}
                className="text-purple-200 hover:text-pink-200 font-semibold transition-colors cursor-pointer"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </motion.button>
            </p>
          </motion.div>

          {/* Terms and Privacy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xs text-gray-200 text-center mt-4"
          >
            By continuing, you agree to our Terms & Privacy Policy
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AuthPage;
