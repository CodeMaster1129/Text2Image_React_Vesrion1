import { create } from 'zustand';
import { persist } from 'zustand/middleware'

const useAuthStore = create(persist(
  (set) => ({
    isAuthenticated: false,
    logIn: () => set((state) => ({ isAuthenticated: true }))
  }),
  {
    name: 'auth-state',
    getStorage: () => localStorage,
  }
));

const useLayoutStore = create((
  (set) => ({
    isHeaderVisible: true,
    setIsHeaderVisible: (value) => set((state) => ({ isHeaderVisible: value }))
  })
))

const useGenerateImageStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
  generatedImages: [],
  setGeneratedImages: (images) => set({ generatedImages: images }),
  originImage: {},
  setOriginImage: (image) => set({ originImage: image })
}));

export { useAuthStore, useLayoutStore, useGenerateImageStore }; 