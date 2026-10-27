class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // La réponse c'est le choix 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
