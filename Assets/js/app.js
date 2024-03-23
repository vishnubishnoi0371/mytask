const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");

// Function to check if the click target is inside the profile card
function isInsideProfileCard(target) {
  return profileCard.contains(target) || target === profileCard;
}

profileImage.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents the click event from propagating to the document body
  if (profileCard.style.display === "block") {
    profileCard.style.display = "none";
  } else {
    profileCard.style.display = "block";
  }
});

document.body.addEventListener("click", function (event) {
  if (!isInsideProfileCard(event.target)) {
    profileCard.style.display = "none";
  }
});

$(document).ready(function () {
  $("select").change(function () {
    $("select option")[0].value = $("select option:selected").val();
    $("select option")[0].innerHTML = $("select option:selected").val();
    $("select").val($("select option:selected").val());

    console.log($("select option:selected").val());
  });
});
