import { Badge } from "../../styles/Badges";
import { StateBadge } from "../../styles/Badges/StateBadge";

export const BadgeTemplate = () => {
  return (
    <>
      <Badge variant="Warning">Click Here</Badge>
      <h1>State Badge</h1>
      <StateBadge variant="Warning"/>
      <StateBadge variant="Destructive"/>
      <StateBadge variant="Success"/>
    </>
  );
};
