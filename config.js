const env = process.env;

/*export const logStart = function(message){
  console.info('*******');
  console.info(message);
  console.info('*******');
};

export const nodeEnv = env.nodeEnv || 'development';
*/
module.exports = {
  mongodbUri: 'mongodb://root:root2018@ds235302.mlab.com:35302/shopping-list',
  port: env.PORT || 5000,
  host: env.HOST || '0.0.0.0',
  get serverUrl(){
    return 'http://'+this.host+':'+this.port;
  }
};