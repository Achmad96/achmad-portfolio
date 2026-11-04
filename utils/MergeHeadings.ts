import type { HeadingMapStruct, HeadingType } from "@/types";

const HEADING_LEVEL: Record<HeadingType, number> = {
  heading_1: 1,
  heading_2: 2,
  heading_3: 3,
};

const mergeHeadings = (headings: HeadingMapStruct[]): HeadingMapStruct[] => {
  const result: HeadingMapStruct[] = [];
  const stack: HeadingMapStruct[] = [];

  headings.forEach((heading) => {
    const newHeading: HeadingMapStruct = {
      id: heading.id,
      text: heading.text,
      type: heading.type,
      sub: [],
    };

    const newLevel = HEADING_LEVEL[newHeading.type] ?? 1;

    while (
      stack.length > 0 &&
      (HEADING_LEVEL[stack[stack.length - 1].type] ?? 1) >= newLevel
    ) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(newHeading);
    } else {
      const parent = stack[stack.length - 1];
      parent.sub = parent.sub || [];
      parent.sub.push(newHeading);
    }

    stack.push(newHeading);
  });

  return result;
};

export { mergeHeadings };
