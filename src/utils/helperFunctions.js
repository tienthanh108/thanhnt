export default function formatedFileSize(sizeInBytes) {
  if (sizeInBytes < 1024) {
    return `${Math.round(sizeInBytes * 100) / 100} bytes`
  } else if (sizeInBytes < 1024 * 1024) {
    return `${Math.round((sizeInBytes / 1024) * 100) / 100} KB`
  }
  return `${Math.round((sizeInBytes / (1024 * 1024)) * 100) / 100} MB`
}
