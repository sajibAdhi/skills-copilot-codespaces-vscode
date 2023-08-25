function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsBtn = document.getElementById("memberSkillsBtn");
  var memberSkillsBtnClose = document.getElementById("memberSkillsBtnClose");

  memberSkillsBtn.addEventListener("click", function() {
    memberSkills.style.display = "block";
    member.style.display = "none";
  });

  memberSkillsBtnClose.addEventListener("click", function() {
    memberSkills.style.display = "none";
    member.style.display = "block";
  });
}