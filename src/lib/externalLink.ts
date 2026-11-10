/** Link helper: opens off-site pages and PDFs in a new tab and tells screen readers so; leaves mailto and in-page anchors alone. */

/** Id of the hidden "(opens in a new tab)" note rendered once in layout.tsx. */
export const NEW_TAB_NOTE_ID = "new-tab-note";

/**
 * Attributes to spread onto an `<a>` for the given href.
 * @param href - The link destination.
 * @returns `target`, `rel` and `aria-describedby` for http(s) links and PDFs, otherwise nothing.
 */
export function externalLinkProps(href: string) {
  return /^https?:\/\/|\.pdf$/i.test(href)
    ? { target: "_blank", rel: "noopener noreferrer", "aria-describedby": NEW_TAB_NOTE_ID }
    : {};
}
