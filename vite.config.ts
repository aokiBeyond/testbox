import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default ({mode}) => // vite配置文件中环境变量可以以如下方式取到
  defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    //后续需要理解
    styleImport({
      libs:[
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name)=>{
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent:(name) =>{
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ],
  base: mode === "development" ? "/" : "./",
  server:{
    port: 9527
  },
  resolve:{
    //配置路径别名
    alias:{
      '@': resolve(__dirname,'./src')
    }
  }
})
