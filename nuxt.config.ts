import { defineNuxtConfig } from 'nuxt';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
} from 'vite-plugin-style-import';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
    },
    plugins: [
      Icons({ autoInstall: true }),
      Components({
        resolvers: [
          AntDesignVueResolver({ importStyle: 'less' }),
          IconsResolver(),
        ],
        dts: true,
      }),
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
      }),
    ],
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue'],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import "${'@/assets/less/variables.less'}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['@nuxt/types', '@nuxtjs/i18n', '@types/he'],
        allowJs: true,
      },
    },
  },
});
