import React from "react";
interface BadgeSkillProps {
  title: string;
}
const BadgeSkill = ({ title }: BadgeSkillProps) => {
  return (
    <span className="align-middle items-center px-2.5 py-0.5 rounded-sm bg-neutral-900 text-white">
     
      <span >{title}</span>
    </span>
  );
};

export default BadgeSkill;
