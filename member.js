function skillsMember()  {
  const member = this;
  const skills = [];
  member.skills = skills;
  member.addSkill = addSkill;
  member.removeSkill = removeSkill;

  function addSkill(skill) {
    skills.push(skill);
  }

  function removeSkill(skill) {
    const index = skills.indexOf(skill);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
}