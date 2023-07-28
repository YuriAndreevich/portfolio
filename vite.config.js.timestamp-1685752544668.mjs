// vite.config.js
import { defineConfig } from "file:///G:/github/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///G:/github/portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    watch: {
      usePolling: true
    },
    port: 3e3,
    host: "localhost"
  },
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
      include: "**/*.tsx"
    })
  ],
  base: "/",
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
      assets: "/src/assets",
      store: "/src/store"
    }
  },
  define: {
    "process.env": process.env
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxnaXRodWJcXFxccG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxnaXRodWJcXFxccG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9naXRodWIvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWVcbiAgICB9LFxuICAgIHBvcnQ6IDMwMDAsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCdcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KHtcbiAgICBleGNsdWRlOiAvXFwuc3Rvcmllc1xcLih0fGopc3g/JC8sXG4gICAgaW5jbHVkZTogJyoqLyoudHN4JyxcbiAgfSksXG4gIF0sXG5cbiAgYmFzZTogJy8nLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIGNvbXBvbmVudHM6ICcvc3JjL2NvbXBvbmVudHMnLFxuICAgICAgaG9va3M6ICcvc3JjL2hvb2tzJyxcbiAgICAgIGFzc2V0czogJy9zcmMvYXNzZXRzJyxcbiAgICAgIHN0b3JlOiAnL3NyYy9zdG9yZScsXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnZcbiAgfVxufSlcblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUCxTQUFTLG9CQUFvQjtBQUM5USxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFBQyxNQUFNO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDRDtBQUFBLEVBRUEsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
