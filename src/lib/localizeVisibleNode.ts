import { cloneElement, isValidElement, type ReactNode } from "react";
import { localizeVisibleCopy } from "@/lib/localizeVisibleCopy";

export function localizeVisibleNode(node: ReactNode): ReactNode {
  if (typeof node === "string") return localizeVisibleCopy(node);
  if (Array.isArray(node)) {
    return node.map((item, index) => {
      const localized = localizeVisibleNode(item);
      return isValidElement(localized) && localized.key == null
        ? cloneElement(localized, { key: `localized-${index}` })
        : localized;
    });
  }
  if (!isValidElement(node)) return node;
  const children = (node.props as { children?: ReactNode }).children;
  return cloneElement(node, undefined, localizeVisibleNode(children));
}
