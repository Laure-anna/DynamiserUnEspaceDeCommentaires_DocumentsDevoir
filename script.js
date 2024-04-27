const button = document
  .getElementById("buttonSubmit")
  .addEventListener("click", function (e) {
    // Eviter le rafraichissiment de la page
    e.preventDefault();

    // Submit le commentaire
    handleSubmit();
  });

const handleSubmit = () => {
  // Récupération des inputs ainsi que de l'erreur message
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let comment = document.getElementById("message");
  const errorMessage = document.getElementById("error-message");

  // Check si un des champs est un string vide, si oui, retour de la div error ainsi que d'un message dans la console.
  if (lastName.value === "" || firstName.value === "" || comment.value === "") {
    errorMessage.style.display = "flex";
    throw new Error("Tout les champs doivent être remplis.");
  }
  // Initilisation de la div cachée au cas où l'utilisateur remplis correctement les informations au 2eme essai
  errorMessage.style.display = "none";

  // Creation du commentaire
  createComment({
    firstName: firstName.value,
    lastName: lastName.value,
    comment: comment.value,
  });

  // Clean du formulaire
  lastName.value = "";
  firstName.value = "";
  comment.value = "";
};

const createComment = ({ firstName, lastName, comment }) => {
  // Récupération de la div de tout les commentaires
  let commentaires = document.getElementById("comment-list");

  // Création de la premier div et mise en forme
  let firstDiv = document.createElement("div");
  firstDiv.className = "flex space-x-4 text-sm text-gray-500";

  // Création de la deuxième div et mise en forme
  let secondDiv = document.createElement("div");
  secondDiv.className = "flex-1 py-10";

  // Création du titre, mise en forme et display du nom et prénom
  let h3 = document.createElement("h3");
  h3.className = "font-medium text-gray-900";
  h3.textContent = `${firstName} ${lastName}`;

  // Creation de la troisième div et mise en forme
  let thirdDiv = document.createElement("div");
  thirdDiv.className = "prose prose-sm mt-4 max-w-none text-gray-500";

  // Création du commentaire dans un paragraphe
  let paragraph = document.createElement("p");
  paragraph.textContent = comment;

  // Mise en forme et retour sur le document
  commentaires.appendChild(firstDiv);
  firstDiv.appendChild(secondDiv);
  secondDiv.appendChild(h3);
  secondDiv.appendChild(thirdDiv);
  thirdDiv.appendChild(paragraph);
};
