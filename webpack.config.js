var webpack = require("webpack");
var DirectoryNamePlugin = require("directory-named-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function localDev() {
  return process.argv[1].indexOf("webpack-dev-server") !== -1;
}

function cssLoader() {
  var loaders = "css?modules&localIdentName=[name]-[local]-[hash:base64:8]!postcss";
  return localDev() ? "style!" + loaders : ExtractTextPlugin.extract(loaders);
}

module.exports = {
  entry: {
    sample: "./src/app/app.js"
  },
  output: {
    path: "dist",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "babel!es6-template-string?exportAs=template&context=styles!html-minify" },
      { test: /\.css$/, loader: cssLoader() },
      {
        test: /\.js$/, loader: "babel", exclude: /node_modules\//,
        query: { optional: ["runtime"], stage: 0 }
      }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamePlugin())
  ].concat(
    localDev() ? [] : [ new ExtractTextPlugin("[name].css") ]
  ),
  resolve: {
    modulesDirectories : ["web_modules", "node_modules", "src"]
  },
  resolveLoader: {
    modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "node_modules", "helpers"]
  },
  'html-minify-loader': {
     spare: true,
     quotes: true
  },
  postcss: function () {
    return [
      require("postcss-import")({
        path: ["src"],
        onImport: function (files) {
            files.forEach(this.addDependency);
        }.bind(this)
      }),
      require("postcss-each"),
      require("postcss-for"), // must be used before postcss-simple-vars & postcss-nested
      require("postcss-mixins"), // must be used before postcss-simple-vars & postcss-nested
      require("postcss-nested"),
      require("postcss-simple-vars"),
      require("postcss-conditionals"),
      require("postcss-selector-not"),
      require('postcss-media-minmax')(),
      require("postcss-quantity-queries")(),
      require("autoprefixer-core")({ browsers: ["last 2 versions", "ie >= 11"] })
    ];
  }
};
