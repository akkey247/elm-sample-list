import Vue from "vue/dist/vue.esm";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

new Vue({
  el: "#list",
  data: {
    items: [
      {
        title: "掲示板システムサンプル",
        repository_name: "elm-boards",
        source_url: "https://github.com/akkey247/elm-boards",
        sample_url: ""
      },
      {
        title: "PWAサンプル",
        repository_name: "pwa-elm-sample",
        source_url: "https://github.com/akkey247/pwa-elm-sample",
        sample_url: "https://akkey247.github.io/pwa-elm-sample/"
      },
      {
        title: "PWAのSPAサンプル",
        repository_name: "pwa-elm-spa-sample",
        source_url: "https://github.com/akkey247/pwa-elm-spa-sample",
        sample_url: "https://akkey247.github.io/pwa-elm-spa-sample/"
      },
      {
        title: "PWAのチャットサンプル",
        repository_name: "pwa-elm-chat",
        source_url: "https://github.com/akkey247/pwa-elm-chat",
        sample_url: "https://akkey247.github.io/pwa-elm-chat/"
      },
      {
        title: "Electronアプリのサンプル",
        repository_name: "electron-elm-sample",
        source_url: "https://github.com/akkey247/electron-elm-sample",
        sample_url: ""
      },
      {
        title: "DockerでElmを動かすサンプル",
        repository_name: "elm-docker-sample",
        source_url: "https://github.com/akkey247/elm-docker-sample",
        sample_url: ""
      },
      {
        title: "ルーティングサンプル",
        repository_name: "elm-routing",
        source_url: "https://github.com/akkey247/elm-routing",
        sample_url: "https://akkey247.github.io/elm-routing/"
      }
    ]
  }
});
