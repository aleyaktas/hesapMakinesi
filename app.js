var prompt = require('prompt')

prompt.start()

const Topla = (birinciSayi, ikinciSayi) => {
    return birinciSayi+ikinciSayi
}

prompt.get([{
    name: 'birinciSayi',

    required: true
  }, {
    name: 'ikinciSayi',

    required: true,
    conform: function (value) {
      return true;
    }
  }], function (err, result) {
    return console.log("Toplam: "+ Topla(parseInt(result.birinciSayi), parseInt(result.ikinciSayi)))
});
