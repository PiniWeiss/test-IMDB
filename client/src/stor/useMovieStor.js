import { create } from 'zustand'

export const useMovieStore = create((set) => ({
    movies: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    setSearchQuery: val => set({searchQuery: val}),

    fetchMovies: async () => {
        set({ isLoading: true, error: null })
        try {
            const res = await fetch("http://localhost:5000/api/movies")
            if (!res) throw new Error("Fetch data faild")
            const data = await res.json()

            set({ movies: data, isLoading: false })
        } catch (error) {
            set({ error: error.message, isLoading: false })
        }
    }
}))