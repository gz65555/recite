/**
 * Created by husong on 30/05/2018.
 */
import * as webpack from 'webpack';

import WebpackConfig from './Webpack.config';

// 创建编译时配置
const devConfig = new WebpackConfig('development');
// 通过watch来实时编译
webpack(devConfig).watch({
  aggregateTimeout: 300
}, (err: Error) => {
  console.log(err);
});