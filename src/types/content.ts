// Content classification per master prompt sectie 3 en 6.
// GENERATED_CONTENT mag nooit stilzwijgend OFFICIAL_CONTENT worden.

export type ContentOrigin = "OFFICIAL_CONTENT" | "USER_CONTENT" | "GENERATED_CONTENT" | "MOCKDATA";

export interface SourceRef {
  sourceDocument: string;
  sourceSection?: string;
  sourcePage?: number;
  sourceLabel?: string;
}

export interface Traceable {
  origin: ContentOrigin;
  source?: SourceRef;
}
