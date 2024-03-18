import React from "react";
import { Tag, TagBox } from "./TagButton.style";

interface TagButtonProps {
  city: string;
}

export default function TagButton({ city }: TagButtonProps) {
  return (
    <div>
      <TagBox>
        <Tag>{city}</Tag>
      </TagBox>
    </div>
  );
}
