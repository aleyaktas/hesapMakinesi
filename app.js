var prompt = require('prompt')

prompt.start()

const Topla = (birinciSayi, ikinciSayi) => {
    return birinciSayi+ikinciSayi
}

const Bolme = (birinciSayi, ikinciSayi) => {
    if(ikinciSayi==0) {
        return console.log("İkinci sayı sıfırdan farklı olmalı!")
    } else {
        return  console.log("Bölme: " + birinciSayi/ikinciSayi)
    }
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
    return Bolme(parseInt(result.birinciSayi), parseInt(result.ikinciSayi))
});
