const shortId = require('shortid');

const encrypt = async (url) => {
  try {
    const hash = shortId.generate();
    console.log(hash, url);
  } catch (err) {
    throw new Error(err);
  }
};

const decrypt = async (hash) => {

};


module.exports = {
  encrypt,
  decrypt,
};
