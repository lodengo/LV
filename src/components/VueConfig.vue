<template>
  <div>
    <h2 id="全局-cli-配置">
      <a href="#全局-cli-配置" class="header-anchor">#</a> 全局 CLI 配置
    </h2>
    <p>
      有些针对
      <code>@vue/cli</code> 的全局配置，例如你惯用的包管理器和你本地保存的
      preset，都保存在 home 目录下一个名叫 <code>.vuerc</code> 的 JSON
      文件。你可以用编辑器直接编辑这个文件来更改已保存的选项。
    </p>
    <h2 id="vue-config-js">
      <a href="#vue-config-js" class="header-anchor">#</a> vue.config.js
    </h2>
    <p>
      <code>vue.config.js</code> 是一个可选的配置文件，如果项目的 (和
      <code>package.json</code> 同级的) 根目录中存在这个文件，那么它会被
      <code>@vue/cli-service</code> 自动加载。你也可以使用
      <code>package.json</code> 中的
      <code>vue</code> 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。
    </p>
    <h3>runtimeCompiler</h3>
    <ul>
      <li>
        <p>Type: <code>boolean</code></p>
      </li>
      <li>
        <p>Default: <code>false</code></p>
        <p>
          是否使用包含运行时编译器的 Vue 构建版本。设置为
          <code>true</code> 后你就可以在 Vue 组件中使用
          <code>template</code> 选项了，但是这会让你的应用额外增加 10kb 左右。
        </p>
        <p>
          更多细节可查阅：<a
            href="https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6"
            target="_blank"
            rel="noopener noreferrer"
            >Runtime + Compiler vs. Runtime only<svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon></svg></a
          >。
        </p>
      </li>
    </ul>
    <h3>devServer</h3>
    <ul>
      <li>
        <p>Type: <code>Object</code></p>
        <p>
          <a
            href="https://webpack.js.org/configuration/dev-server/"
            target="_blank"
            rel="noopener noreferrer"
            >所有 <code>webpack-dev-server</code> 的选项<svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon></svg></a
          >都支持。注意：
        </p>
        <ul>
          <li>
            <p>
              有些值像 <code>host</code>、<code>port</code> 和
              <code>https</code> 可能会被命令行参数覆写。
            </p>
          </li>
          <li>
            <p>
              有些值像 <code>publicPath</code> 和
              <code>historyApiFallback</code>
              不应该被修改，因为它们需要和开发服务器的
              <a href="#publicpath">publicPath</a> 同步以保障正常的工作。
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <h3>lintOnSave</h3>
    <ul>
      <li>
        <p>
          Type: <code>boolean</code> | <code>'warning'</code> |
          <code>'default'</code> | <code>'error'</code>
        </p>
      </li>
      <li>
        <p>Default: <code>'default'</code></p>
        <p>
          是否在开发环境下通过
          <a
            href="https://github.com/webpack-contrib/eslint-loader"
            target="_blank"
            rel="noopener noreferrer"
            >eslint-loader<svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon></svg
          ></a>
          在每次保存时 lint 代码。这个值会在
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener noreferrer"
            ><code>@vue/cli-plugin-eslint</code
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon></svg
          ></a>
          被安装之后生效。
        </p>
        <p>
          设置为 <code>true</code> 或 <code>'warning'</code> 时，<code
            >eslint-loader</code
          >
          会将 lint
          错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
        </p>
        <p>
          如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用
          <code>lintOnSave: 'default'</code>。这会强制
          <code>eslint-loader</code> 将 lint 错误输出为编译错误，同时也意味着
          lint 错误将会导致编译失败。
        </p>
        <p>
          设置为 <code>error</code> 将会使得 <code>eslint-loader</code> 把 lint
          警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。
        </p>
        <p>或者，你也可以通过设置让浏览器 overlay 同时显示警告和错误：</p>
        <div class="language-js extra-class">
          <pre
            class="language-js"
          ><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
    overlay<span class="token operator">:</span> <span class="token punctuation">{</span>
      warnings<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      errors<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </div>
        <p>
          当 <code>lintOnSave</code> 是一个 truthy 的值时，<code
            >eslint-loader</code
          >
          在开发和生产构建下都会被启用。如果你想要在生产构建时禁用
          <code>eslint-loader</code>，你可以用如下配置：
        </p>
        <div class="language-js extra-class">
          <pre
            class="language-js"
          ><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  lintOnSave<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span>
<span class="token punctuation">}</span>
</code></pre>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
