import fb from './../firebase';
var db = fb.database();
var ref = db.ref("contatos");
var contatos = [];
ref.orderByChild("nome").on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    // console.log(data.val());
    contatos.push(data.val());
  });
});

export default {
    state: {
        contatos
    }
}