import path from 'path' 
import webpack from 'webpack';
import dotenv from 'dotenv';


interface Env {
    production?: boolean;
  }
  
const envFile = (env: Env) => {
  const envFilePath = env.production ? '.env.production' : '.env.development';
  return dotenv.config({ path: envFilePath }).parsed;
};

export default (env: Env): webpack.Configuration => ({
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envFile(env)),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
});