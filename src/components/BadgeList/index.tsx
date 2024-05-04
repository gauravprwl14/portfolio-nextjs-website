import React from "react";
import PropTypes from "prop-types";
import { Badge, badgeVariants } from "@/components/ui/badge";

type Badge = {
  label: string;
  // color?: string;
  // variant?: keyof typeof badgeVariants;
  // size?: string;
  onClick?: () => void;
};

type BadgeListProps = {
  badges: Badge[];
  className?: string;
};
const BadgeList = ({ badges, className = "" }: BadgeListProps) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {badges.map((badge, index) => (
        <Badge
          key={index}
          // color={badge.color || undefined}
          variant={badge.variant || "secondary"}
          // size={badge.size || undefined}
          onClick={badge.onClick || undefined}
          className="m-1"
        >
          {badge.label}
        </Badge>
      ))}
    </div>
  );
};
BadgeList.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string,
      variant: PropTypes.oneOf(Object.keys(badgeVariants)),
      size: PropTypes.string,
      onClick: PropTypes.func,
    })
  ).isRequired,
  className: PropTypes.string,
};
export default BadgeList;
