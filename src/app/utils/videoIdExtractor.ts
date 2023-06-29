export function videoIdExtractor(videoUrl: string) {
  return videoUrl.slice(-11);
}
