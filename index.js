class Vehicule {
  constructor(
    matricule,
    type,
    distanceParcourue,
    listesVehicules = { matricule: "", type: "", distanceParcourue: 0 }
  ) {
    this.matricule = matricule;
    this.type = type;
    this.distanceParcourue = distanceParcourue;
    this.listesVehicules = listesVehicules;
  }
  addVhicule() {
    this.matricule = prompt("Ajouter la matricule");
    this.type = prompt("Ajouter le type");
    this.distanceParcourue = prompt("Ajouter la Distance");
    // console.log([this.matricule, this.type, this.distanceParcourue]);
    let vehicule = {
      matricule: this.matricule,
      type: this.type,
      distanceParcourue: this.distanceParcourue,
    };
    this.listesVehicules = [...this.listesVehicules, vehicule];
    console.log(this.listesVehicules);
  }
  showVehicule() {
    this.listesVehicules.forEach((vehicules) => {
      result = `La matricule est: ${this.matricule}, Le type est: ${this.type}, La distance parcoutie: ${this.distanceParcourue}`;
    });
    document.write(result);
  }
  calculTarif() {
    this.type = prompt("Ajouter le type");
    this.distanceParcourue = prompt("Ajouter la Distance");
    if (this.distanceParcourue <= 0) {
      alert("La distance est negative ou egale 0");
    } else {
      switch (this.type) {
        case "moto":
          console.log(this.distanceParcourue * 0.3);
          break;
        case "voiture":
          console.log(this.distanceParcourue * 0.5);
          break;
        case "camion":
          console.log(this.distanceParcourue * 0.7);
          break;
        default:
          alert("Input incorrect");
      }
    }
  }
}

var vehiculeT1 = new Vehicule();

vehiculeT1.addVhicule();
// vehiculeT1.calculTarif();
